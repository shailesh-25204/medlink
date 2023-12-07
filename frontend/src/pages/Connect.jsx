import React from 'react'
import Videoplayer from '../components/Connect/Videoplayer/Videoplayer.jsx'
import Notification from '../components/Connect/Notification/Notification.jsx'
import Options from '../components/Connect/Options/Options.jsx'
import { ContextProvider } from '../socketContext.jsx'

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