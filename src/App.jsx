import { useState } from 'react'
import Header from './components/Header'
import Content1 from './components/Content1'
import Content2 from './components/Content2'

function App() {

  return (
    <div className='overflow-hidden'>
    <Header/>
    <Content1/>
    <Content2/>
    </div>
  )
}

export default App
