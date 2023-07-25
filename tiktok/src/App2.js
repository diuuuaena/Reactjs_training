import { useStore,actions } from "./store"

function App2() {
    const [state, dispatch] =useStore()
    const {todo,todoInput} =state
    const handleAdd =() =>{
        dispatch(actions.addTodo(todoInput))
        dispatch(actions.setTodoInput(''))
    }
    return (
        <div>
            <input 
                value={todoInput}
                placeholder="Enter todo..."
                onChange={e=> {
                    dispatch(actions.setTodoInput(e.target.value))
                }}
            />
            <button onClick={handleAdd}>Add</button>
            {todo.map((todo,index) => (
                <li key={index}>
                    {todo}
                    <span onClick={()=>dispatch(actions.deleteTodo(index))}>&times;</span>
                </li>
            ))}
        </div>
    )
}
export default App2