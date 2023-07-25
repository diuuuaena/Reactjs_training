import { useState } from 'react'
//import Content from './Content'
//import Time from './Time'
import Avatar from './Avatar'
function App() {
  const [action,setAction] =useState('')
  const [actions,setActions] =useState(() => {
    const storageActions=JSON.parse(localStorage.getItem('actions'))
    return storageActions
  })
  const [show,setShow] =useState(false)
  const handleChange=(e) => {
    setAction(e.target.value)
  }
  const handleSubmit=() => {
    setActions(prev =>{
      const newActions =[...prev,action]
      const jsonActions =JSON.stringify(newActions)
      localStorage.setItem('actions',jsonActions)
      return newActions
    })
    setAction('')
  }
  const handleToggle =() =>{
    setShow(!show)
  }
  return (
    <div className="App" style={{padding: 20}}>
      <input value={action} onChange={handleChange}/>
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {actions.map((action,index) =>(
          <li key={index}>{action}</li>
        ))}
      </ul>
      <div>
        <button onClick={handleToggle}>Toggle</button>
        {show &&<Avatar />}
      </div>
    </div>
  );
}

export default App;
