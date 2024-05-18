import React, { useState } from 'react'

function FunctionCom({name}) { 
    // let num = 6 ;
    const[num,setNum] = useState(54)
    const[num2,setNum2] = useState(54)
  return (
    <div>
        <h1>{name}</h1>
      <h1>Functional Component</h1>
      <button onClick={() => setNum(num+1)}>increment</button>
      <p>{num}</p>
    </div>
  )
}

export default FunctionCom
