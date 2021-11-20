import React,{useState, useEffect} from "react";
import './App.css';

//Importing components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  //States
  const [inputText, setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos]=useState([]);
  
  //Functions
 const filterHandler = () => {
  switch(status){
    case 'completed':
      setFilteredTodos(todos.filter(todos => todos.completed === true));
      break;
    case 'uncompleted':
      setFilteredTodos(todos.filter(todos => todos.completed === false));
      break;  
    default:
      setFilteredTodos(todos);
      break;  
  }
 };

 useEffect(() => {
   getLocalTodos();
 }, []);  //run ONLY ONCE

 useEffect(() => {
   filterHandler();
   saveLocalTodos()
 }, [todos,status]);

 //Save to Local
 const saveLocalTodos = () => {
    localStorage.setItem("todos",JSON.stringify(todos));
 };

 const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null) 
      localStorage.setItem("todos",JSON.stringify([]));
    else {
      var todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }  
 };

  return (
    <div className="App">
      <header><h1>Things To Do</h1></header>
      <Form setTodos={setTodos} todos={todos} inputText={inputText} setInputText={setInputText} setStatus={setStatus}/>
      <ToDoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
