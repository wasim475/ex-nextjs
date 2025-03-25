import { NextResponse } from 'next/server';


export function middleware(request){
    // console.log(request.url)
    
     return NextResponse.redirect(new URL('/gallery',request.url)) // request.url হলো ডোমেইন নেম লাইক- localhost:3000
    
    // return NextResponse.next()
}

export const config = {
    // matcher: '/dashboard'
    matcher: ['/dashboard','/about','/photos']
}