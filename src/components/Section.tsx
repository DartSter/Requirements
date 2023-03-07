import React from 'react'
import { useState } from 'react'


const Section:React.FC = (section:any) => {
    const [visibility, setVisibility] = useState(false)
  
    const showSection = ():void=> setVisibility(!visibility)

    return (
        <div onClick={showSection}>
            {visibility && section}
        </div>
  )
}


export default Section