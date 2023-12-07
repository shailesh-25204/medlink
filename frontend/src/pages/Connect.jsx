import React from 'react'
import Videoplayer from '../components/Connect/Videoplayer/Videoplayer'
import Notification from '../components/Connect/Notification/Notification'
import Options from '../components/Connect/Options/Options'
import { ContextProvider } from '../socketContext'

const Connect = () => {
  return (
    <ContextProvider>
    <div className='h-[calc(100vh-100px)] border border-solid'>
        <Videoplayer/>
        <Options>
            <Notification/>
        </Options>
    </div>
    </ContextProvider>
  )
}

export default Connect