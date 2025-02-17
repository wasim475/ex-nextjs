import React from 'react'

const Button = ({onIncrement, label}) => {
  return (
    <>
      <button onClick={onIncrement}>{label}</button>
    </>
  )
}

export default Button
