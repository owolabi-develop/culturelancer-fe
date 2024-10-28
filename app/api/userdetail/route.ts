import { NextResponse,NextRequest } from 'next/server'
import { http_endpoints } from '@/app/libs/definations'



export async function GET(request: NextRequest) {
    const userID = request.cookies.get("user_id")?.value;
    const token = request.cookies.get('token')?.value;

    // Check if userID and token exist
    if (!userID || !token) {
        return NextResponse.json(
            { error: 'Missing userID or token' },
            { status: 400 }
        );
    }

    try {
        const response = await fetch(`${http_endpoints}careerportal/account/${userID}/`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        // Check if the response is ok
        if (!response.ok) {
            return NextResponse.json(
                { error: 'Failed to fetch user details' },
                { status: response.status }
            );
        }

        // Parse and return the JSON data
        const userDetails = await response.json();
        return NextResponse.json(userDetails);
    } catch (error) {
        console.error('Error fetching user details:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}