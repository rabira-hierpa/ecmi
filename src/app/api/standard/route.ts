import { renameFile } from "@/lib/utils";
import fs, { writeFile } from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

const STANDARD_UPLOAD_DIR = "public/uploads/standard";

export const responseLimit = "50mb";

// Routes to upload pdf files and save them to the database.
export async function POST(req: NextRequest) {
  const uploadDir = path.join(process.cwd(), STANDARD_UPLOAD_DIR);
  const data = await req.formData();
  const file: File | null = data.get("file") as unknown as File;
  if (!file) return NextResponse.json({ success: false, message: "No file found" });

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const fileName = renameFile(file);
  const filePath = path.join(process.cwd(), STANDARD_UPLOAD_DIR, fileName);
  // Ensure the uploads folder exists;
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }
  await new Promise<void>((resolve, reject) => {
    writeFile(filePath, new Uint8Array(buffer), (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
  console.log("File uploaded successfully");
  console.log(filePath);
  return NextResponse.json({
    success: true,
    path: fileName,
  });
}

// GET request to download the uploaded pdf files.
export async function GET(req: NextRequest) {
  console.log("GET request in standard");

  const { searchParams } = new URL(req.url);
  const filename = searchParams.get("filename");
  console.log("Filename: ", filename);

  if (!filename) {
    return NextResponse.json({ success: false, message: "Filename query parameter is required" }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), STANDARD_UPLOAD_DIR, filename);
  console.log("File path: ", filePath);

  try {
    const file = fs.readFileSync(filePath);
    return new NextResponse(file, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${filename}"`,
      },
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: "File not found" }, { status: 404 });
  }
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const filename = searchParams.get("filename");
  if (!filename) {
    return NextResponse.json({ success: false, message: "Filename query parameter is required" }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), STANDARD_UPLOAD_DIR, filename);

  try {
    fs.rmSync(filePath);
    return NextResponse.json({ success: true, message: "File deleted" });
  } catch (error) {
    return NextResponse.json({ success: false, message: "File not found" }, { status: 404 });
  }
}
