import { NextRequest, NextResponse } from "next/server";
// import { http_endpoints } from "@/app/libs/definations";
//  register applicant
export async function POST(request: NextRequest) {
  const assessmentID = request.cookies.get("assessment_id")?.value;
  try {
    const data = await request.json();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/account/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const ResponseData = await response.json();
    const { userdata } = ResponseData;
    //

    if (assessmentID) {
      const userid = userdata.id;
      console.log(userid);

      const assessmentResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/get-applicant-assessment/${userid}/${assessmentID}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (assessmentResponse.ok) {
        console.log("assessment attached to user.. successfully ");
      }
    }

    return NextResponse.json(ResponseData);
  } catch (error) {
    console.error("error creating account", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
