import React, {useState} from 'react'

const Event03 = () => {
    const [email, setemail] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        alert("Submitted email:" +email);

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="email"
            value={email}
            placeholder='Enter your email'
            onChange={(e)=>setemail(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Event03