"use client";

type FileOpenProps = {
  filePath: string;
  apiUrl: string;
};

export default function FileOpen({ filePath, apiUrl }: FileOpenProps) {
  const handleFileOpen = async () => {
    try {
      const response = await fetch(`/api/${apiUrl}/?filename=${filePath}`);
      if (!response.ok) {
        throw new Error("Failed to fetch the file");
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error fetching the file:", error);
    }
  };

  return (
    <div onClick={handleFileOpen}>
      <svg
        className="h-8 w-8 text-blue-500 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    </div>
  );
}
