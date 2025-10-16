import React,{useState} from 'react'

const Events = () => {
    const [count, setcount] = useState(0)

    function handleClick (){
        setcount(prev=>prev+1);
    }
  return (

    <div>
        <h3>count : {count}</h3>
        <button onClick={handleClick}>click me</button>
    </div>
  )
}

export default Events