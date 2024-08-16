import {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>Current Count: {count}</p>
            <button onClick ={ ()=> setCount(count + 1)}>Increment</button>
            <btton onClick ={ ()=>setCount(count - 1)}>Decrement</btton>
            <button onClik ={ ()=>setCount(0)}>Reset</button>
        </div>
    )
}
export default Counter
