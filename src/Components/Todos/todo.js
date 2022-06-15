const Todo = ({todo, deleteTodo}) =>{
    return (
        <div className="todo">
            <div onClick={() => {
                deleteTodo(todo.id)
            }}>
                {todo.text}
            </div>
        </div>
    );
}

export default Todo;
