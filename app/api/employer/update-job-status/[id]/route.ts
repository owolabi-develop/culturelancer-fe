import { NextResponse, NextRequest } from "next/server";

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  const userID = request.cookies.get("user_id")?.value;
  const token = request.cookies.get("token")?.value;

  // Check if userID and token exist
  if (!userID || !token) {
    return NextResponse.json({ error: "Missing userID or token" }, { status: 400 });
  }
  const data = await request.json();

  const { id } = params;
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/job/${id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    // Check if the response is ok
    if (!response.ok) {
      return NextResponse.json({ error: "Failed to updae job status" }, { status: response.status });
    }

    // Parse and return the JSON data
    const userDetails = await response.json();
    return NextResponse.json(userDetails);
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
