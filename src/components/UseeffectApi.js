import React from "react";
import { useState, useEffect } from "react";

function UseeffectApi() {
  const url = `https://api.github.com/users`;
  const [user, setUser] = useState([]);
  
  const getUser = async () => {
    try {
        let response = await fetch(url);
        let userJson = await response.json();
        setUser(userJson);    
    } catch (error) {
       console.log(error)
    }
  };
  useEffect(() => {
    getUser();
  },[]);
  return (
    <>
      <div className='row'>
      {user.map((users) => {
        const { id, login, avatar_url, html_url} = users;
        return (
          <div className="col-md-4 col-lg-3 mb-3" key={id}>
            <div className='card'>
              <img src={avatar_url} alt="" />
              <div className='card-body'>
                <h2>{login}</h2>
                <p>{html_url}</p>
              </div>
            </div>
          </div>
        );
      })}
      </div>
    </>
  );
}

export default UseeffectApi;
