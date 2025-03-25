import { NextResponse } from 'next/server';

export function middleware(request){
    console.log("I'm inside in middleware.")
    return NextResponse.json({
        hello: "Hello World"
    })
}