import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './app.css'


export function Header(){
  const[num,setNum]=useState(0);

  return(
    <header className='header'>
      <svg alt='gym'  xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-barbell"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 12h1" /><path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2" /><path d="M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" /><path d="M9 12h6" /><path d="M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" /><path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2" /><path d="M22 12h-1" /></svg>
      <h1>GYM Nacho</h1>
      <button onClick={()=>{setNum(num === 0 ? 1 : 0)}}>{num}</button>
    </header>
  )
}
export function Main(){
    return(
        <main className='main'>
          <section className="section1"></section>
          <section className="section2"></section>
        </main>
    )
}
export function Footer(){
    return(
        <footer className='footer'>
        eliseojoaquin.dev © 2025
        </footer> 
    )
}


