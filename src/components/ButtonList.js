import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const buttonArray = ["All", "React", "Software", "Engineering", "Full-stack"];
  return (
    <div>
      {buttonArray.map((item)=> <Button name={item}/> )}
      
    </div>
  )
}

export default ButtonList
