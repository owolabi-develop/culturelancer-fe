import { NextRequest, NextResponse } from "next/server";
// import { http_endpoints } from "@/app/libs/definations";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/assesment/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const responseData = await response.json();
    const { id } = responseData;

    // Set cookies for token and user_id
    const responseWithCookies = NextResponse.json(responseData);
    responseWithCookies.cookies.set("assessment_id", id, {
      httpOnly: true,
      secure: true,
      path: "/",
    });

    // Return the response with cookies set
    return responseWithCookies;
  } catch (error) {
    console.error("error creating assessment", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
