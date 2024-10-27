import { NextRequest,NextResponse } from "next/server";
import { http_endpoints } from "@/app/libs/definations";

export async function POST(request: NextRequest) {
    try{
        const data = await request.json()
        const response =  await fetch(`${http_endpoints}careerportal/account/`,{
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
        });
          return NextResponse.json(await response.json());

    } catch (error){
        console.error("error creating account",error)
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }

}