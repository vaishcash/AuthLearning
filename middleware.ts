import { NextResponse } from "next/server";
import NextAuth from "next-auth";

import authConfig from "./auth.config";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "./routes";

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  const { nextUrl } = req;

  const isLoggedIn = !!req.auth; // Ensure `req.auth` is properly set up in NextAuth
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix as unknown as string);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  // If it's an API Auth route, allow access
  if (isApiAuthRoute) {
    return NextResponse.next();
  }

  // Handle authentication routes
  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return NextResponse.next();
  }

  // Redirect unauthenticated users away from private routes
  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL("/auth/login", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
