import { NextRequest,NextResponse } from "next/server";
// import { http_endpoints } from "@/app/libs/definations";

export async function GET(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/get-user-assessment-score/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization":`Bearer ${token}`

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
