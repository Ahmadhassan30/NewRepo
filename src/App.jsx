import { useState } from 'react'
import './App.css'

function App() {
const hasNotifications=false;

return(
 <div className='container'>
  <h2>Dashboard</h2>
  {hasNotifications && <p>You have a New notification</p>}
 </div>
)

}

export default App

/*
Method 01: If/Else statement
Method 02: Ternary operators
Method 03: Logical Operators

*/