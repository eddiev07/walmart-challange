import {useState} from 'react'

import Todo from "./todo";
import TodoForm from "./TodosForm";

const TodosView = () => {
    const [todos,
        setTodos] = useState([
        {
            id: new Date().getTime() + 2,
            text: 'Walmart Challenge'
        }, {
            id: new Date().getTime() + 3,
            text: 'Eat Tacos'
        }, {
            id: new Date().getTime() + 4,
            text: 'Sleep'
        }
        // Added the +number after the getTime function, because all the preloaded items
        // have the same id on load. so adding the +number makes them unique and can be
        // deleted.
    ]);
    const deleteTodo = (id) => {
        const newFilteredTodos = [...todos].filter((todo) => todo.id !== id)
        setTodos(newFilteredTodos)
    }
    return (
        <div>{todos.map((todo, index) => (<Todo
                key={index}
                index={index}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                deleteTodo={deleteTodo}/>))}
            <TodoForm todos={todos} setTodos={setTodos}/>
        </div>
    )
}

export default TodosView;