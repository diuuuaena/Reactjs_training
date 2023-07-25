import { useReducer,useRef } from "react"
//useReducer
//1. Init state
const initState= {
    job: '',
    jobs: []
}
//2. Action
const SET_JOB= 'set_job'
const ADD_JOB= 'add_job'
const DELETE_JOB= 'delete_job'
const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

const addJob = payload =>{
    return{
        type: ADD_JOB,
        payload
    }
} 

const deleteJob=index=> {
    return {
        type: DELETE_JOB,
        index
    }
}

//3. Reducer
const reducer= (state,action) =>{
    switch(action.type){
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case DELETE_JOB:
            const newJobs=[...state.jobs]
            newJobs.splice(action.index,1)
            return{
                ...state,
                jobs: newJobs
            }
    }
}
//4. Dispatch

function TodoWithReducer() {
    const [state,dispatch] = useReducer(reducer,initState)
    const {job,jobs} =state
    const inputRef=useRef()
    const handleSubmit= () =>{
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }
    return (
        <div style={{padding: '0 20px'}}>
            <h3>Todo</h3>
            <input 
                ref={inputRef}
                value={job}
                placeholder="Enter todo..."
                onChange={e =>{
                    dispatch(setJob(e.target.value))
                }}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job,index) => (
                    <li key={index}>
                        {job}
                        <span onClick={()=> dispatch(deleteJob(index))}>
                            &times;
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoWithReducer