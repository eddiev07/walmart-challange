import React, {useState} from "react";

function TodoForm({todos, setTodos}) {
    const [value,
        setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) 
            return;
        
        const newAddedTodo = {
            id: new Date().getTime(),
            text: value
        }
        setTodos([...todos].concat(newAddedTodo))
        setValue("");
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input"
                    placeholder="  Add todos...."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}/>
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    );
}

export default TodoForm;
