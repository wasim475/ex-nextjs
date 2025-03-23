import { headers } from 'next/headers';

export async function GET(request){
    // const requestHeaders = new Headers(request.headers); //row system to get headers
    const headerList = headers() //nextjs to get headers
     console.log(headerList.get("Authorization"));

     return new Response("profile-Info",{
        headers:{
            'Set-Cookie':'theme=dark'
        }
     })
}