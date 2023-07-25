import { useEffect } from "react"
import { useState } from "react"

//1. useEffect(callback)
//      - gọi callback mỗi khi component re-render
//      - gọi callback sau khi component thêm element vào DOM
//2. useEffect(callback, [])
//      - chỉ gọi callback 1 lần sau khi component mounted
//3. useEffect(callback, [deps])
//      - callback sẽ được gọi lại mỗi khi deps thay đổi
//================================
//1. callback luôn được gọi sau khi component mounted (đúng với cả 3)

const tabs=['posts','comments','albums','photos','todos','users']
function Content() {
    const [list,setList] = useState([])
    const [type,setType] =useState('posts')
    const [showGoToTop,setShowGoToTop] = useState(false)
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts =>{
                setList(posts);
            })
    },[type])
    useEffect(() => {
        const handleScroll =()=>{
            // if(window.scrollY>=200){
            //     setShowGoToTop(true)
            // }else{
            //     setShowGoToTop(false)
            // }
            //cách 2
            setShowGoToTop(window.scrollY>=300)
        }
        window.addEventListener('scroll',handleScroll)
        return () =>{
            window.removeEventListener('scroll',handleScroll)
        }
    })
    return (
        <div>
            {tabs.map(tab => (
                <button 
                    key={tab} 
                    style={type === tab ?{
                        color: '#fff',
                        background: '#333',
                    } : {}}
                    onClick={()=> setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <ul>
                {list.map( post => (
                    <li key={post.id}>{post.title||post.name}</li>
                ))}
            </ul>
            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20,
                    }}
                >
                    Go to top
                </button>
            )}
        </div>
    )
}

export default Content