import Link from 'next/link'
import React from 'react'

const getData = async ()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  if(!res.ok){
   return "data not found"
    
  }
  return res.json()
}
const page = async () => {
  const data = await getData()
  console.log(data)
  return (
    <div>
      <ul>
        <li>
          <Link href={"/students/nafi"} >student-1</Link>
        </li>
        <li>student-2</li>
        <li>student-3</li>
      </ul>
    </div>
  )
}

export default page
