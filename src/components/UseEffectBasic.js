import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UseEffectBasic=()=>{
    const [state,setState]=useState(0)
    useEffect(()=>{
        document.title=`You clicked  ${state} times`
    })
    return (
        <div className='card  w-50 text-center m-auto'>
            <h1 className='card-title'>you clicked {state} times </h1>
            <button className='btn btn-outline-primary' onClick={()=>setState(state+1)}>Clik me</button>
        </div>
    )
}

export default UseEffectBasic
