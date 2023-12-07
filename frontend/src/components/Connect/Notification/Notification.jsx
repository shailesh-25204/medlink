import React, { useContext } from 'react'
import { SocketContext } from '../../../socketContext'
const Notification = () => {
  const {answerCall, call, callAccepted} = useContext(SocketContext)
  return (
    <>
    {
      call.isRecievedCall && !callAccepted && (
        <div>
          <h1>
            {call.name} is calling: 
          </h1>
          <button type = "button" className="btn" onClick={answerCall}>
          Answer
          </button>
        </div>
      )
    }
    </>
  )
}

export default Notification