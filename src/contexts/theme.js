import React, { createContext, useState, useEffect } from 'react'

const ThemeContext = createContext({
  state: { theme: 'light' },
  actions: {
    toggleTheme: () => { }
  }
})

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    let isDark
    if (localTheme) isDark = localTheme === 'dark'
    else isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (isDark) setMode('dark')
  }, [])

  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
  }

  const value = {
    state: { theme },
    actions: { toggleTheme }
  }

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}

const { Consumer: ThemeConsumer } = ThemeContext

export { ThemeProvider, ThemeConsumer }

export default ThemeContext
