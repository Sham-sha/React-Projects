import React, { useState } from "react";
import "./ToDoList.css";
import { TiDelete } from "react-icons/ti";

function ToDoList() {
  let [items, setItems] = useState([
    { id: 1, label: "HTML & CSS" },
    { id: 2, label: "Javascript" },
    { id: 3, label: "React Js" },
  ]);

  let [newItem, setNewItem] = useState("");
  let [isEditing, setIsEditing] = useState(false);
  let [currentElementId, setCurrentElementId] = useState(null);

  let handleEdit = (id) => {
    let listItem = items.find((item) => item.id === id);
    setIsEditing(true);
    setCurrentElementId(id);
    setNewItem(listItem.label);
  };

  let handleDelete = (id) => {
    newItem = items
      .filter((item) => item.id !== id)
      .map((item, index) => {
        return { ...item, id: index + 1 };
      });
    setItems(newItem);
  };

  let handleAddOrSaveItems = () => {
    if (newItem.trim() === "") return;
    if (isEditing) {
      let newListItem = items.map((item) => {
        return item.id === currentElementId
          ? { ...item, label: newItem }
          : item;
      });
      setItems(newListItem);
      setCurrentElementId(null);
      setNewItem("");
      setIsEditing(false);
    } else {
      setItems([...items, { id: items.length + 1, label: newItem }]);
      setNewItem("");
    }
  };
  return (
    <div className="container">
      <h1>To Do List</h1>
      <div className="inputDiv">
        {/* inputbox */}
        <input
          className="inputbox"
          type="text"
          placeholder="Task to be done"
          value={newItem}
          // onclick event
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
        />
        {/* button */}
        <button className="submitBtn" onClick={handleAddOrSaveItems}>
          {isEditing ? "Save" : "Add"}
        </button>
      </div>
      <div className="list">
        <ul>
          {items.map((item) => {
            return (
              <li key={item.id} className="item">
                <label htmlFor="">{item.label}</label>

                <div className="btn">
                  <button
                    className="editBtn"
                    tabIndex={0}
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="deleteBtn"
                    tabIndex={0}
                    onClick={() => {
                      handleDelete(item.id);
                      console.log(item.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
