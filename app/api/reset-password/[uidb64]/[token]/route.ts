import { NextRequest, NextResponse } from "next/server";
// import { http_endpoints } from "@/app/libs/definations";

export async function POST(request: NextRequest, { params }: { params: { uidb64: string, token: string } }) {
    try {
        const { uidb64, token } = params;
        const data = await request.json();
        
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/reset-password/${uidb64}/${token}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const responseData = await response.json();
        return NextResponse.json(responseData);

    } catch (error) {
        console.error("Error in password reset:", error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
