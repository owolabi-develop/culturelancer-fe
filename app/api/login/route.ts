import { NextRequest, NextResponse } from "next/server";
import { http_endpoints } from "@/app/libs/definations";

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const response = await fetch(`${http_endpoints}careerportal/login/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            return NextResponse.json({ error: "Invalid login credentials" }, { status: response.status });
        }

        // Get JSON data from the response
        const responseData = await response.json();
        const { token, user_id } = responseData;

        // Set cookies for token and user_id
        const responseWithCookies = NextResponse.json(responseData);
        responseWithCookies.cookies.set('token', token, { httpOnly: true, secure: true, path: '/' });
        responseWithCookies.cookies.set('user_id', user_id, { httpOnly: true, secure: true, path: '/' });

        // Return the response with cookies set
        return responseWithCookies;

    } catch (error) {
        console.error("Cannot login", error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
