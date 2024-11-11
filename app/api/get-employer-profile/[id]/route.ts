import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const userID = request.cookies.get("user_id")?.value;
  const token = request.cookies.get("token")?.value;

  // Check if userID and token exist
  if (!userID || !token) {
    return NextResponse.json({ error: "Missing userID or token" }, { status: 400 });
  }
  console.log(userID, "userID");

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/employer-profile/${userID}`, {
      headers: {
        method: "GET",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    // Check if the response is ok
    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch employer profile" }, { status: response.status });
    }

    // Parse and return the JSON data
    const userDetails = await response.json();
    return NextResponse.json(userDetails);
  } catch (error) {
    console.error("Error fetching employer profile:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
