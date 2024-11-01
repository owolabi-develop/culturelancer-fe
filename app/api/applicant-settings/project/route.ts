import { NextRequest,NextResponse } from "next/server";
import { http_endpoints } from "@/app/libs/definations";
//  register applicant
import axios from "axios";
export async function POST(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    try{
        const data = await request.json()
        const response = await axios.post(`${http_endpoints}careerportal/applicant-project/`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                  "Authorization":`Bearer 741bdb7805ec6c761410fe6abb31dfb19acc814b`
            },
        });
        if (response.status === 200) {
            console.log('Form submitted successfully');
        }
        // 
        // if (response.ok) {
        //     console.log("applicant project successfully ")
            
        //   }

          return NextResponse.json(response.status);

    } catch (error){
        console.error("error applicant project",error)
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }

}