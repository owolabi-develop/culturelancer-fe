import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  // If no token is found, redirect to the login page
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/dashboard",
    "/applicant/dashboard:path*",
    "/employer/dashboard",
    "/applicant/profile",
    "/employer/dashboard/profile",
    "/employer/dashboard/candidate-profile",
    "/employer/dashboard/jobs",
    "/employer/dashboard/post-job",
    "/employer/dashboard/profile-settings",
    "/employer/dashboard/job-details",
    "/employer/dashboard/candidate",
    "/applicant/settings",
    "/employer/post-job",
  ],
};
