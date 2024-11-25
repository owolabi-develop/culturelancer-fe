import { NextRequest,NextResponse } from "next/server";
// import { http_endpoints } from "@/app/libs/definations";
export async function POST(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    try{
        const data = await request.json()
        console.log(data)
        const profileresponse =  await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/applicant-skills/`,{
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