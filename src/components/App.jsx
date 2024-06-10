import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {

  const [inputText, setInputText] = useState("")
  const [items, setItems] = useState([])

  function addItem(){
    setItems(preVal => {
      return [...preVal, inputText]
    })

    setInputText("");
  }

  function handleItemChange(e){
    setInputText(e.target.value)
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input name="content" type="text" onChange={handleItemChange} value={inputText}/>
        <button onClick={addItem}><span>Add</span></button>
      </div>
      <div>
        <ul>
          {items.map(todoItem => 
            <ToDoItem text = {todoItem} />
            )}
        </ul>
      </div>
    </div>
  );
}

export default App;
