import { NextRequest,NextResponse } from "next/server";
// import { http_endpoints } from "@/app/libs/definations";
//  delete certificate
export async function DELETE(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    console.log(id)
    try{
        const profileresponse =  await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/applicant-project/${id}/`,{
                method: "DELETE",
                headers: {
                "Content-Type": "application/json",
                "Authorization":`Bearer ${token}`
                },
        });
         console.log(profileresponse)
          return NextResponse.json({ success: true, message: "applicant-projects deleted successfully" });

    } catch (error){
        console.error("error fail to delete specializations ",error)
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }

}