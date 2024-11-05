import { NextRequest,NextResponse } from "next/server";
import { http_endpoints } from "@/app/libs/definations";
//  delete certificate
export async function DELETE(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    console.log(id)
    try{
        const profileresponse =  await fetch(`${http_endpoints}careerportal/applicant-award-certifications/${id}/`,{
                method: "DELETE",
                headers: {
                "Content-Type": "application/json",
                "Authorization":`Bearer ${token}`
                },
        });
         console.log(profileresponse)
          return NextResponse.json({ success: true, message: "Certificate deleted successfully" });

    } catch (error){
        console.error("error fail to get profile ",error)
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }

}