import { NextRequest,NextResponse } from "next/server";
//  register applicant
export async function GET(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    try{
        const profileresponse =  await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/applicant-specialization/`,{
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