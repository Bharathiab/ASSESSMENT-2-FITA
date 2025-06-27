// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaTrash } from "react-icons/fa";

// function App() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [products, setProducts] = useState([""]);
//   const [newItem, setNewItem] = useState("");

//   // Filter list based on searchTerm
//   const filtered = products.filter((item) =>
//     item.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Add new product to list
//   const addProduct = () => {
//     if (newItem.trim() !== "") {
//       setProducts([...products, newItem.trim()]);
//       setNewItem("");
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>ToDoApp</h2>

//       {/* Add New Product */}
//       <div className="input-group mb-3">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Add Task"
//           value={newItem}
//           onChange={(e) => setNewItem(e.target.value)}
//         />
//         <button className="btn" onClick={addProduct}>
//           ➕
//         </button>
//       </div>

//       {/* Display Filtered List */}
//       <ul className="list-group">
//         {filtered.map((item, index) => (
//           <li key={index} className="list-group-item">
//             {item}
//           </li>
//         ))}
//       </ul>

//     </div>
//   );
// }

// export default App;


// //counter reset 10-0

// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   const handleIncrement = () => {
//     if (count === 9) {
//       setCount(0); // Reset to 0 when next click reaches 10
//     } else {
//       setCount(count + 1);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Counter: {count}</h1>
//       <button onClick={handleIncrement}>+</button>
//       <button onClick={() => setCount(count - 1)}>-</button>
//     </div>
//   );
// }

// export default App;



// //parent
// src/Props-parent-child.js
// import React from "react";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Msg from "./Msg";

// function App() {
//   return (
//     <div className="container mt-5">
//       <h2>Props Parent-child</h2>
//       <Msg name="Good morning"/>
//     </div>
//   );
// }

// export default App;


//toggle
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import ToggleMessage from "./ToggleMessage";

// function App() {
//   return (
//     <div>
//       <ToggleMessage />
//     </div>
//   );
// }

// export default App;


//checkbox
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import CheckboxMessage from "./CheckboxMessage";

// function App() {
//   return (
//     <div className="container mt-5">
//       <h2>Checkbox</h2>
//       <CheckboxMessage />
//     </div>
//   );
// }

// export default App;



//grandparent props
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import GrandParent from "./GrandParent";

// function App() {
//   return (
//     <div className="container mt-5">
//       <h4>Props-GrandParent-Child</h4>
//       <GrandParent />
//     </div>
//   );
// }

// export default App;


// //todoapp
// import React from "react";
// import TodoApp from "./TodoApp";

// function App() {
//   return (
//     <div>
//       <TodoApp />
//     </div>
//   );
// }

// export default App;


// //loginform
// import React from "react";
// import LoginForm from "./LoginForm";

// function App() {
//   return (
//     <div>
//       <LoginForm />
//     </div>
//   );
// }

// export default App;


// // Map -NameList
// import React from "react";
// import NameList from "./NameList";

// function App() {
//   return (
//     <div>
//       <NameList />
//     </div>
//   );
// }

// export default App;


// Inputfield
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InputField from "./InputField";

function App() {
  const [formData, setFormData] = useState({ firstName: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-5">
      <h2>Reusable Input Field </h2>
      <InputField
        label="First Name"
        placeholder="Enter your first name"
        name="firstName"
        onChange={handleChange}
      />
      <p>Typed: {formData.firstName}</p>
    </div>
  );
}

export default App;










