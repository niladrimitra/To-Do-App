import React from "react";
//Import components
import Todo from "./Todo";

const ToDoList = ({filteredTodos, setTodos, todos}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
              {filteredTodos.map((todo) => (
                  <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} text={todo.text} />
              ))}  
            </ul>
        </div>
    );
};

export default ToDoList;