// import { NextApiRequest, NextApiResponse } from 'next';
import { cookies } from 'next/headers'
// export default function GET(req: NextApiRequest, res: NextApiResponse) {
//   const { token } = req.body;
//   res.setHeader('Set-Cookie', `token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict`);
//   res.status(200).json({ message: 'Token set in HTTP-only cookie' });
// }


 
export async function GET(request: Request) {
    const cookieStore = await cookies()
    const { data } = await request.json();
    const token = cookieStore.set('token',data)
   
    return new Response('Hello, Next.js!', {
      status: 200,
      headers: { 'Set-Cookie': `token=${token}` },
    })
  }