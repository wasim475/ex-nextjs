import { cookies, headers } from 'next/headers';

export async function GET(request){
    // const requestHeaders = new Headers(request.headers); //raw way to get headers
    const headerList = headers() //nextjs way to get headers
     console.log(headerList.get("Authorization"));
     console.log(request.cookies.get('theme')) //raw way to get cookies

     cookies().set('page','2') //nextjs way to set cookies
     console.log(cookies().get('page')) //raw way to get cookies

     return new Response("profile-Info",{
        headers:{
            'Set-Cookie':'theme=dark' //raw way to set cookies
        }
     })
}