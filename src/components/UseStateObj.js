import React from "react";
import { useState } from "react";

const UseStateObj = () => {
  const [state, setState] = useState({
    name: "Jonathan",
    age: 21,
    biography:
      "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit",
  });

  const handleSubmit=()=>{
    setState({...state,mesage:'Hello world'});
    console.log(state)
  }
  return (
    <div className="row">
      <div className="col col-md-6">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">{state.name}</h2>
            <p className='card-text'><strong>Age: </strong>{state.age}</p>
            <p className="card-text">{state.biography}</p>
            <p className="card-text">{state.mesage}</p>
          </div>
          <button className='btn btn-outline-success' onClick={handleSubmit}>Click Me</button>
        </div>
      </div>
    </div>
  );
};

export default UseStateObj;
