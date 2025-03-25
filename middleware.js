import { NextResponse } from 'next/server';

let count = 1
export function middleware(request){
    console.log("I'm inside in middleware.",count++)
    return NextResponse.redirect(new URL('/gallery',request.url)) // request.url হলো ডোমেইন নেম লাইক- localhost:3000
    // return NextResponse.next()
}