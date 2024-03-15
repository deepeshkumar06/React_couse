import React, { useContext, useState } from 'react'

const authcontext = React.createContext(null)

export const Auth = ({children}) => {
    const [user,setuser] = useState(null)
    const login = (user) => {
        setuser(null)
    }
    const logout = () => {
        setuser(null)
    }
  return (
    <div>
        <authcontext.Provider>
            {children}
        </authcontext.Provider>
    </div>
  )
}


export const useAuth = () => {
    return useContext(authcontext)
}