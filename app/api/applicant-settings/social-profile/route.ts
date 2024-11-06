import { NextRequest,NextResponse } from "next/server";
// import { http_endpoints } from "@/app/libs/definations";
//  register applicant
export async function POST(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    try{
        const data = await request.json()
        const response =  await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/applicant-social-profile/`,{
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
            console.log("profile faq successfully ")
            
          }

          return NextResponse.json(ResponseData);

    } catch (error){
        console.error("error create profile faq",error)
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }

}