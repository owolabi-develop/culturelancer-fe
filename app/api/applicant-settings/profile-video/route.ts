import { NextRequest,NextResponse } from "next/server";
import { http_endpoints } from "@/app/libs/definations";
//  register applicant
export async function POST(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    try{
        const data = await request.json()
        const response =  await fetch(`${http_endpoints}careerportal/applicant-video/`,{
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                "Authorization":`Bearer ${token}`
                },
                body: JSON.stringify(data),
        });
        const ResponseData = await response.json() 
        // 
        if (response.ok) {
            console.log("applicant video successfully ")
            
          }

          return NextResponse.json(ResponseData);

    } catch (error){
        console.error("error adding  applicant video",error)
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }

}