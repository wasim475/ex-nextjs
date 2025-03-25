import { NextResponse } from 'next/server';


export function middleware(request){
    // console.log(request.url)
    
    //  return NextResponse.redirect(new URL('/gallery',request.url)) // request.url হলো ডোমেইন নেম লাইক- localhost:3000
     return NextResponse.rewrite(new URL('/gallery',request.url)) // rewrite এর কাজ হলো, পাথনেম ঠিকই থাকবে কিন্তু কনটেন্ট দেখেবে gallery এর...
    
    // return NextResponse.next()
}

export const config = {
    // matcher: '/dashboard'
    matcher: ['/dashboard','/about','/photos'] // matcher অবশ্যই / দিয়ে শুরু হতে হবে
}