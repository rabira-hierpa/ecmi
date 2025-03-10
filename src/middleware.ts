import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import acceptLanguage from "accept-language";
import { NextResponse } from "next/server";
import { cookieName, fallbackLng, languages } from "./app/i18n/settings";

acceptLanguage.languages(languages);

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|assets|uploads|favicon.ico|sw.js|site.webmanifest).*)",
  ],
};

export function intlMiddleware(req: any) {
  let lng;
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName).value);
  if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  if (!lng) lng = fallbackLng;

  // Redirect if lng in path is not supported
  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
    );
  }

  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer"));
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    );
    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  // return NextResponse.next();
}

const isProtectedRoute = createRouteMatcher(["/admin", "/:lng*/admin"]);
export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
  return intlMiddleware(req);
});
