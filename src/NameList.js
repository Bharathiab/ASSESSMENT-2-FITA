import React from "react";

function NameList() {
  const names = ["John", "Jane", "Alex"];

  return (
    <div className="container mt-5">
      <h3>Name List</h3>
      <ul className="list-group">
        {names.map((name, index) => (
          <li key={index} className="list-group-item">
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NameList;

