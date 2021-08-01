import React from "react";
import { useState } from "react";
import { data } from "../data";
const UseStateArray = () => {
  const [state, setState] = useState(data);
  const handClick = (id) => {
    const newPerson = state.filter((person) => person.id !== id);
    setState(newPerson);
  };
  return (
    <div className="row">
      <button
        className="btn btn-outline-danger m-3"
        onClick={() => setState([])}
      >
        Delete all card
      </button>
      {state.map((person, index) => {
        const { id, profile, fullName, biograpy, git } = person;
        return (
          <div className="col col-md-6 col-lg-4" key={index}>
            <div class="card">
              <img src={profile} class="card-img-top" alt="..." />
              <div class="card-body">
                <h2 className="card-title">{fullName}</h2>
                <p class="card-text">{biograpy}</p>
                <a href={git}>GitHub</a>
              </div>
              <button
                className="btn btn-outline-danger"
                onClick={() => handClick(id)}
              >
                Delete person
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UseStateArray;
