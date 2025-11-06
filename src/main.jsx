import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Header,Main,Footer} from './app.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Main />
    <Footer />
  </StrictMode>,
)
