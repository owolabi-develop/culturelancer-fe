import { NextRequest,NextResponse } from "next/server";
import { http_endpoints } from "@/app/libs/definations";
//  register applicant
export async function POST(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    try{
        const data = await request.json()
        console.log(data)
        const profileresponse =  await fetch(`${http_endpoints}careerportal/applicant-skills/`,{
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                "Authorization":`Bearer ${token}`
                },
                body: JSON.stringify(data)
        });
        const ResponseData = await profileresponse.json() 
          return NextResponse.json(ResponseData);

    } catch (error){
        console.error("error fail to get profile ",error)
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }

}