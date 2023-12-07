import React, { useContext } from 'react'
import { SocketContext } from '../../../socketContext.jsx'

const Videoplayer = () => {
const {name , callAccepted, myVideo, userVideo, callEnded, stream, call} = useContext(SocketContext)

  return (
    <div className='container h-[calc(100vh-300px)]'>
      <div className="flex sm:flex-row flex-col items-center justify-evenly ">
        {/* Our Video  */}
        {stream && (
            <div className="border border-solid border-black  p-[10px] m-[10px]">
            <video playsInline muted ref={myVideo} autoPlay/>{name || 'User 1'}
            </div>
        )}
        
        {/* User Video */}
        {
          callAccepted && !callEnded && (
            <div className="border border-solid border-black p-[10px] m-[10px]">
            <video playsInline muted ref={userVideo} autoPlay/>{call.name || 'User 2'}
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Videoplayer