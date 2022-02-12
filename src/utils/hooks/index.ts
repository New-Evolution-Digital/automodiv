import { useState } from 'react'

import { useDispatch } from 'react-redux'

// Redux Global Hooks
export const useAppDispatch = () => useDispatch()

export const useAuth = () => {
  const [isAuthed, setIsAuthed] = useState(false)

  const setAuth = (authParams: Record<string, string> = {}) => {
    if (authParams)
      window.localStorage.setItem('ent', JSON.stringify(authParams))
    setIsAuthed(true)
  }

  const clearAuth = () => {
    window.localStorage.removeItem('ent')
    setIsAuthed(false)
  }

  return { isAuthed, setAuth, clearAuth }
}
