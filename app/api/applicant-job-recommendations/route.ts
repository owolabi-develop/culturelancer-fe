import { NextRequest,NextResponse } from "next/server";
// import { http_endpoints } from "@/app/libs/definations";

//  register applicant
export async function GET(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    try{
        const response =  await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/match-job-recommendation`,{
                method: "GET",
                headers: {
                "Content-Type": "application/json",
                "Authorization":`Bearer ${token}`
                },
        });
        const ResponseData = await response.json() 
        // 
        if (response.ok) {
            console.log("applicant job recomendations",ResponseData)
            
          }
          return NextResponse.json(ResponseData);
    } catch (error){
        console.error("error adding award",error)
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }

}