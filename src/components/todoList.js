import React, { useState } from "react";
import "./TodoList.css";
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newTodo, setNewTodo] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddTodo = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNewTodo("");
  };

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleNewTodoSubmit = () => {
    if (newTodo) {
      setTodos([...todos, { text: newTodo }]);
      handleCloseModal();
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  

  return (
    <div className="todo-list">
      <h1>ToDo List</h1>
      <div className="search-bar">
        <label>
        <SearchIcon/>:
          <input type="text" value={searchTerm} placeholder="Search todo" onChange={handleSearchChange} />
        </label>
      </div>
      <button className="add-todo-btn" onClick={handleAddTodo}>Add a todo</button>
      <ul className="todo-items">
        {filteredTodos.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo.text}
             <DeleteOutlineOutlinedIcon className="delete-todo-btn" onClick={() => handleDeleteTodo(index)}></DeleteOutlineOutlinedIcon> 
          </li>
        ))}
      </ul>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <label>
              New todo:
              <input type="text" value={newTodo} placeholder="Enter Todo" onChange={handleNewTodoChange} />
            </label>
            <div className="modal-buttons">
              <CloseIcon className="cancel-btn" onClick={handleCloseModal}/>
              <DoneOutlinedIcon className="submit-btn" onClick={handleNewTodoSubmit}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoList;
