import React, { useState, createContext } from "react"

export const MessageContext = createContext()

export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState(false)

  return (
    <MessageContext.Provider value={[message, setMessage]}>
      {children}
    </MessageContext.Provider>
  )
}

export default MessageContext
