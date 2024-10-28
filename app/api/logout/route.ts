import { cookies } from 'next/headers'

import { redirect } from 'next/navigation'
 
export async function GET() {
  const cookieStore = await cookies()
    cookieStore.delete('token')
    cookieStore.delete('user_id')
    console.log("logout.....")
   redirect('/login')
   
  
}

   