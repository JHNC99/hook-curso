import React, { useState } from 'react'

function MultipleReturns() {
    const [isLoading,setIsLoading]=useState(false);
    const [isError,setIsError]=useState();
    const [user,setUser]=useState()
    const url=`https://api.github.com/users`
   
    if(isLoading){
        return(
            <h1 className='text-center'>Loading.....</h1>
        )
    }
}

export default MultipleReturns;
