import { NextResponse } from 'next/server';


export function middleware(request){
    console.log(request.url)
    if(request.url.includes('gallery')){
        
        return NextResponse.redirect(new URL('/gallery',request.url)) // request.url হলো ডোমেইন নেম লাইক- localhost:3000
    }
    return NextResponse.next()
}