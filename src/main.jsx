import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Events from './Events.jsx'
import Event02 from './Event02.jsx'
import Event03 from './Event03.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Event03/>
  </StrictMode>,
)
