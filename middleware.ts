import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isAuthPath = path === "/auth";
  const isProtectedPath = path === "/movies"||path==="/tv"||path==="/";

  const token = request.cookies.get("token")?.value || "";

  if (isAuthPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  if (isProtectedPath && !token) {
    return NextResponse.redirect(new URL("/auth", request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/movies",
    "/tv",
    "/auth",
  ],
};