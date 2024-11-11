import { NextRequest, NextResponse } from "next/server";

//  create jobs
export async function POST(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  try {
    const data = await request.json();
    console.log(data, "data");

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/job/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    const ResponseData = await response.json();

    if (response.ok) {
      console.log("Job created successfully ");
    }

    return NextResponse.json(ResponseData);
  } catch (error) {
    console.error("error creating job", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
