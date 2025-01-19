import NextAuth , { Session } from "next-auth";

import authConfig from "./auth.config";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "./routes";
import { NextRequest } from "next/server";


const { auth } = NextAuth(authConfig);

export default auth(
  (req: NextRequest & { auth: Session | null }): Response | void => {
    const { nextUrl } = req;

    const isLoggedIn = !!req.auth;
    // Ensure `req.auth` is properly set up in NextAuth
    const isApiAuthRoute = nextUrl.pathname.startsWith(
      apiAuthPrefix as unknown as string
    );
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    // If it's an API Auth route, allow access
    if (isApiAuthRoute) {
      return ;
    }

    // Handle authentication routes
    if (isAuthRoute) {
      if (isLoggedIn) {
        return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
      }
      return ;
    }

    // Redirect unauthenticated users away from private routes
    if (!isLoggedIn && !isPublicRoute) {
      return Response.redirect(new URL("/auth/login", nextUrl));
    }

    return ;
  }
);

export const config = {
  matcher: ["/((?!.*\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
