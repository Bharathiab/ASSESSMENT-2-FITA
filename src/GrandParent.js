import React from "react";
import Parent from "./Parent";

function GrandParent() {
  const message = <h1>"Hello from GrandParent"</h1>;

  return (
      <Parent message={message} />
  );
}

export default GrandParent;




