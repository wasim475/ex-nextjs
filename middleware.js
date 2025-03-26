import { NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

let defaultLocale = "en";
let locales = ["bn", "en"];

export function middleware(request) {
  const pathName = request.nextUrl.pathname;
  const pathNameIsMissingLocale = locales.every(
    (locale) => !pathName.startsWith(`/${locale}`),
    !pathName.startsWith(`/${locale}/`)
  );
  if(pathNameIsMissingLocale){
     // detect user's preference & redirect with a locale with a path eg: /en/about
     const locale = getLocale(request)
     return NextResponse.redirect(new URL(`${locale}/${pathName}`, request.url))
  }
  return NextResponse.next()
}
