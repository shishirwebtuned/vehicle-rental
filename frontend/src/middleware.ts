import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/login" || pathname === "/sign-up")
    return NextResponse.next();

  const token = req.cookies.get("userToken")?.value;
  const role = req.cookies.get("userRole")?.value;

  if (!token || !role) return NextResponse.redirect(new URL("/login", req.url));

  if (role === "admin" && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/admin-dash", req.url));
  }
  if (role === "customer" && pathname.startsWith("/admin-dash")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin-dash/:path*"],
};
