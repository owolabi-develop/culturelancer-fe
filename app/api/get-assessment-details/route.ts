import { NextResponse } from "next/server";
import { http_endpoints } from "@/app/libs/definations";

export async function GET() {
    try {
        const response = await fetch(`${http_endpoints}careerportal/get-user-assessment-score/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization":"Bearer 0dd423430319334437a739c3d9e40ed09cb4a1b3"

            },
           
        });
        if (response.ok){
            const assement_details = await response.json()
            console.log(assement_details)
        }

        if (!response.ok) {
            return NextResponse.json({ error: "Invalid login credentials" }, { status: response.status });
        }

        return NextResponse.json( await response.json())

    } catch (error) {
        console.error("Cannot get assment details", error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
