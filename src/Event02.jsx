import React, {useState}from 'react'

const Event02 = () => {
    const [name, setname] = useState("")

    function handleChange(e){
setname(e.target.value)
    }
  return (
    <div>
        <input 
        type="text" 
        value={name}
        onChange={handleChange}
        placeholder='Enter you name' />
<p>Hello , {name || "pupil"}</p>
    </div>
  )
}

export default Event02