import React, { useState, useCallback, useEffect } from "react";
// import {axios} from 'axios'
import axios from 'axios'

const ToDoList = () => {
  const [value, setvalue] = useState("");
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(false);
  const [editIndex, setEditIndex] = useState(null);


  const handleUpdateTodo = async (index, id) => {
    setShow(false);
    setTodos([...todos])
  
      try {
      const response = await fetch(`https://todolist-1-b1v3.onrender.com/${id}`, {
        method: "PUT",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value }),
      });
  
      const updatedTodo = await response.json();
      const updatedTodos = [...todos];
      updatedTodos[index] = updatedTodo;  
      setTodos(updatedTodos);
      setvalue(""); 
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };
  
  
  const fetchTodos = useCallback(() => {
    axios.get('https://todolist-1-b1v3.onrender.com/')
      .then((result) => setTodos(result.data))
      .catch((error) => console.log(error));
  }, []);  
  
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]); 

  
  const handleAddTodo = () => {
    if (value !== "") {
      // const newTodo = {value: value };
      // const updatedTodo = [...todos, newTodo];
      // localStorage.setItem("todos", JSON.stringify(updatedTodo));
      axios.post('https://todolist-1-b1v3.onrender.com/', {value: value})
      .then(result => setTodos([...todos, result.data]))
      .catch(error => console.log(error))
      setvalue("");
      // setTodos(updatedTodo); 
    } else {
      alert("Please write something.");
    }
  };

  const handleedit = (index) => {
    setShow(true);
    setvalue(todos[index].value);
    setEditIndex(index); 
  };
  

    // if (newValue !== null && newValue !== "") {
    //   try {
    //     const response = await fetch(`http://localhost:3001/${id}`, {
    //       method: "PUT",
    //       headers: {
    //         "Application": "application/json",
    //         "Content-Type": "application/json"
    //        },
    //       body: JSON.stringify({ value: newValue }),
    //     });
    //     const updatedTodo = await response.json();
    //     const updatedTodos = [...todos];
    //     updatedTodos[index] = updatedTodo;
    //     setTodos(updatedTodos);
    //   } catch (error) {
    //     console.error("Error updating todo:", error);
    //   }
    // }
  
  

 
  const handleKeyPress = (e) =>{
    // if (value !== "") {
    //     const newTodo = { id: Date.now(), value: value };
    //     const updatedTodo = [...todos, newTodo];
    //     localStorage.setItem("todos", JSON.stringify(updatedTodo));
    //     setvalue("");
    //     setTodos(updatedTodo); 
    //   } 
 
    if(value !== "" && e.key === 'Enter'){
      axios.post('https://todolist-1-b1v3.onrender.com/', {value: value})
      .then(result => setTodos([...todos, result.data]))
      .catch(error => console.log(error))
      setvalue("");
      
      // setTodos(updatedTodo); 
    }else{
      
     
    }
  }
  

  
  const handledelete = (id) => {
    axios.delete(`https://todolist-1-b1v3.onrender.com/${id}`)
      .then(() => {
        setTodos(todos.filter(todo => todo._id !== id));
      })
      .catch(error => console.error("Error deleting todo:", error));
  };
  
 

 
  

  return (
    <div className="h-auto bg-gray-200 py-20">
      <div className="container mx-auto w-1/2 bg-white rounded-3xl">
        <div className="flex flex-row row-span-2 gap-4 items-center justify-center font-semibold text-2xl">
          To Do List
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="42" viewBox="0 0 32 32"><path fill="#008000" d="m17.866 15.509l-.98.98l-.98-.978l-1.957-1.957l.977-.977l1.957 1.957l4.891-4.894l.98.977z"/>
          <path fill="#c00000" d="M14.454 21.443h8.303v1.383h-8.303z"/><path fill="#cfcfcf" d="M2 5.74v23.709h24.909V5.74Zm23.477 22.449l-22.083-.058l.023-20.974h22.077ZM6.151 10.951v5.534h5.534v-5.534ZM10.3 15.1H7.534v-2.766H10.3Zm-4.151 4.22v5.534h5.534v-5.531Zm4.151 4.154H7.534v-2.765H10.3ZM30 2.551V26.24h-1.431L28.549 4l-22.4-.029v-1.42z"/></svg>
        </div>
        
        <div className="flex flex-row row-span-2 items-center justify-center p-5 relative">
          <input
            className="bg-gray-100 rounded-2xl py-2 px-2 shadow-xl w-[30rem]"
            type="text"
            placeholder="Add your Text"
            value={value}
            onChange={(e) => setvalue(e.target.value)}
            onClick={handleKeyPress}
            onKeyDown={(e) => e.key === `Enter` && handleKeyPress(e)}
           
          />
          {!show?<button
            className="text-white bg-red-900 rounded-3xl w-20 h-10 absolute right-[9rem]"onClick={handleAddTodo} >Add</button>:
            <button 
            className="text-white bg-red-900 rounded-3xl w-20 h-10 absolute right-[9rem]"
            onClick={() => handleUpdateTodo(editIndex, todos[editIndex]._id)}
          >
            Update
          </button>
          
          
          }
            {/* {editIndex !== null ? "Update" : "Add"} */}
        </div>
        <ul className="p-5">
          {todos.map((todo, index) => (
            <li
              key={todo.id}
              className="bg-gray-100 rounded-2xl py-2 px-4 shadow-xl mb-2 relative"
            >
              {todo.value}
              <button className="absolute right-0"  onClick={() => handledelete(todo._id)}>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000"
                    d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"
                  />
                </svg>
              </button>
              <button className="absolute right-10" onClick={() => handleedit(index)}>

              <svg xmlns="http://www.w3.org/2000/svg"
               width="24" 
               height="24"
               viewBox="0 0 24 24">
              <path fill="#000" d="M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"/></svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
