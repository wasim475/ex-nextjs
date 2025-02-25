"use client"

import Link from 'next/link'

const CustomLink = ({children, pathName}) => {
  return (
    <>
     <Link href={pathName} >{children}</Link> 
    </>
  )
}

export default CustomLink
