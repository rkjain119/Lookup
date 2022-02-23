import React, { createContext, useContext, useEffect, useState } from "react"

const DarkModeContext = createContext()

export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true)

  const handleDarkMode = () => {
    localStorage.setItem("darkMode", !darkMode)
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode") === "true"
    setDarkMode(darkMode)
  }, [])

  return (
    <DarkModeContext.Provider value={{ darkMode, handleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkModeContext = () => useContext(DarkModeContext)
