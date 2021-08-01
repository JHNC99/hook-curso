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
  }, []);
  return (
    <>
      {user.map((users) => {
        const { id, login, avatar_url, html_url} = users;
        return (
          <ul key={id}>
            <li>{login}</li>
            <li>
              <img src={avatar_url} alt="" />
            </li>
            <li>{html_url}</li>
          </ul>
        );
      })}
    </>
  );
}

export default UseeffectApi;
