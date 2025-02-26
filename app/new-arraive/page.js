import React from 'react'
import CustomLink from '../components/customLink/customLink'

const NewArrive = () => {
  return (
    <div>
      <ul>
        <li>
          <CustomLink path={'/electronic'} >Electric</CustomLink>
        </li>
        <li>Education</li>
        <li>Homes</li>
      </ul>
    </div>
  )
}

export default NewArrive
