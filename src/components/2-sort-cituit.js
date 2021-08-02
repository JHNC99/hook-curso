import React from 'react'
import { useState } from 'react'
/* 
Tres operadores logicos basicos
1.-Y lógico&&
2.-OR lógico||
3.-NO lógico!

true || true;
// true
true || false;
// true
false || false;
// false
*/

export const ShortCircuit=()=>{

    const [text,setText]=useState('');
    const firstValue=text||'Hello world'
    const secondValue=text&&'Hello world'
    return(
        <div>
            <h1 className='text-center'>{firstValue}</h1>
            <h2 className='text-center'>value: {secondValue}</h2>
        </div>
    )
}