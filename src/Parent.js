import React from "react";
import Child from "./Child";

function Parent(props) {
  return ( 
      <Child message={props.message} /> 
  );
}

export default Parent;


