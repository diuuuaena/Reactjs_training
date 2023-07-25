import { SET_TODO_INPUT,ADD_TODO, DELETE_TODO } from "./Constants"

const initState = {
    todo: [],
    todoInput: ''
}

function reducer(state,action) {
    switch(action.type){
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todo: [...state.todo,action.payload]
            }
        case DELETE_TODO:
            const newTodo = [...state.todo]
            newTodo.splice(action.index,1)
            return {
                ...state,
                todo: newTodo
            }

    }
}

export {initState}
export default reducer