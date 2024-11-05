import { NextRequest,NextResponse } from "next/server";
import { http_endpoints } from "@/app/libs/definations";
//  register applicant
export async function GET(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    try{
        const profileresponse =  await fetch(`${http_endpoints}careerportal/applicant-specialization/`,{
                method: "GET",
                headers: {
                "Content-Type": "application/json",
                "Authorization":`Bearer ${token}`
                },
        });
        const ResponseData = await profileresponse.json() 
          return NextResponse.json(ResponseData);

    } catch (error){
        console.error("error fail to get applicant specialization",error)
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }

}