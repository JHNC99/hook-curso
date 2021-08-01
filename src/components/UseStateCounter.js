import React from 'react'
import { useState } from 'react'

const UseStateCounter=()=>{
    const [value,setValue]=useState(0)
    const resetValue=()=>{
        setValue(0)
    }
    return (
        <div className='card m-auto w-50 text-center'>
            <div className='card-body'>
                <h1 className='card-title'>Counter Hooks</h1>
                <h2 className='card-subtitle mb-2'>{value}</h2>
                <button className='btn btn-outline-danger m-1' onClick={()=>setValue(value-1)}>Decrest</button>
                <button className='btn btn-outline-primary m-1' onClick={resetValue}>Reset</button>
                <button className='btn btn-outline-success m-1' onClick={()=>setValue(value+1)}>Increment</button>
            </div>
        </div>
    )
    
}

export default UseStateCounter
