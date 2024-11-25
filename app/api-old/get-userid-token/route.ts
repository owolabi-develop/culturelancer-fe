import { type NextRequest,NextResponse } from 'next/server'
 
export async function GET(request: NextRequest) {
  const userId = request.cookies.get('user_id')?.value
  const token = request.cookies.get('token')?.value
 
  return NextResponse.json({token:token,userId:userId})
}