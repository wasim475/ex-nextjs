"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const CustomLink = ({children, path , prefetch=true}) => {
  const pathName = usePathname()
  return (
    <>
     <Link className={`${pathName===path ?"text-blue-500":""}`} href={path} prefetch={prefetch} >{children}</Link> 
    </>
  )
}

export default CustomLink
