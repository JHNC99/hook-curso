import React, { useState } from "react";
import { useEffect } from "react";
const MultipleReturns=()=>{
  const url = `https://api.github.com/users/JHNC99`;
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("Default user");
  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if ((resp.status >= 200) & (resp.status <= 299)) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <h1 className="text-center">Loading...</h1>;
  }
  if (isError) {
    return <h1 className="Error">Error</h1>;
  } 
  else {
    return (
      <div>
        <h1>{user}</h1>
      </div>
    );
  }
}
export default MultipleReturns;
