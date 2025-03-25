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

// Using Cookies
/*
import { NextResponse } from 'next/server'
 
export function middleware(request) {
  // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
  // Getting cookies from the request using the `RequestCookies` API
  let cookie = request.cookies.get('nextjs')
  console.log(cookie) // => { name: 'nextjs', value: 'fast', Path: '/' }
  const allCookies = request.cookies.getAll()
  console.log(allCookies) // => [{ name: 'nextjs', value: 'fast' }]
 
  request.cookies.has('nextjs') // => true
  request.cookies.delete('nextjs')
  request.cookies.has('nextjs') // => false
 
  // Setting cookies on the response using the `ResponseCookies` API
  const response = NextResponse.next()
  response.cookies.set('vercel', 'fast')
  response.cookies.set({
    name: 'vercel',
    value: 'fast',
    path: '/',
  })
  cookie = response.cookies.get('vercel')
  console.log(cookie) // => { name: 'vercel', value: 'fast', Path: '/' }
  // The outgoing response will have a `Set-Cookie:vercel=fast;path=/test` header.
 
  return response
}
  */
