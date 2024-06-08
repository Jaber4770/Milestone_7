import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    
    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleReduce = () =>{
        const newCount = count -1;
        setCount(newCount);
    }
    return (
        <div style={{border: '1px solid white', borderRadius:"5px", padding: "10px"}}>
            <p>Hello from JSX counter!</p>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}