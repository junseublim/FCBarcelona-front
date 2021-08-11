import React, { useEffect, useContext } from 'react'
import ThemeContext from '../../contexts/theme'

const ToggleBtn = () => {
  const context = useContext(ThemeContext)
  const toggleTheme = context.actions.toggleTheme
  const theme = context.state.theme

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('.toggle-btn-wrap').classList.add('dark')
      document.querySelector('.toggle-btn').classList.add('dark')
    } else {
      document.querySelector('.toggle-btn-wrap').classList.remove('dark')
      document.querySelector('.toggle-btn').classList.remove('dark')
    }
  }, [theme])

  return (
    <div className="toggle-btn-wrap" onClick={toggleTheme}>
      <div className="toggle-btn">
      </div>
    </div>
  )
}

export default ToggleBtn
