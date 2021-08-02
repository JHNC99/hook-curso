import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
/* import UseStateBasics from './components/UseStateBasics'; */
//import UseStateArray from './components/UseStateArray';
// import UseStateObj from "./components/UseStateObj";
// import UseStateCounter from "./components/UseStateCounter";
//import UseEffectBasic from "./components/UseEffectBasic";
//import UseeffectApi from "./components/UseeffectApi";
//import MultipleReturns from "./components/1-multiple-returns";
import { ShortCircuit } from "./components/2-sort-cituit";

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center">React advance</h1>
      <ShortCircuit/>
    </div>
  );
};

export default App;
