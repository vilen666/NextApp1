import React from 'react'
import Background from './Docs/Background'
import Foreground from './Docs/Foreground'
import ChatGpt from './ChatGpt'

const Docs = () => {
  return (
    <div className=' h-screen w-full bg-slate-800 relative'>
      <Background/>
      <Foreground/>
    </div>
  )
}

export default Docs
