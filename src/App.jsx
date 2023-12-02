import { useState } from 'react'
import Header from './components/Header'
import Content1 from './components/Content1'
import Content2 from './components/Content2'
import Content3 from './components/Content3'

function App() {

  return (
    <div className='overflow-hidden'>
    <Header/>
    <Content1/>
    <Content2/>
    <Content3/>
    </div>
  )
}

export default App
