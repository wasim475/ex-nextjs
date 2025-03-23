import { headers } from 'next/headers';

export async function GET(request){
    // const requestHeaders = new Headers(request.headers); //raw way to get headers
    const headerList = headers() //nextjs way to get headers
     console.log(headerList.get("Authorization"));
     console.log(request.cookies.get('theme')) 

     return new Response("profile-Info",{
        headers:{
            'Set-Cookie':'theme=dark'
        }
     })
}