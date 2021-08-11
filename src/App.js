import './styles/style.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import StandingList from './components/Standing/StangindList'
import UpcomingList from './components/UpcomingMatches/UpcomingList'
import MainPage from './pages/MainPages/MainPage'
import React, { useEffect, useContext } from 'react'
import ThemeContext from './contexts/theme'
import { useDispatch } from 'react-redux'
import { getSquad } from './modules/squad'
import { getMatches } from './modules/match'
import { getTeams } from './modules/teams'
import { getNews } from './modules/news'
import { getTransfers } from './modules/transfers'

function App () {
  const dispatch = useDispatch()
  const { state } = useContext(ThemeContext)
  const theme = state.theme

  useEffect(() => {
    dispatch(getSquad())
    dispatch(getMatches())
    dispatch(getTeams())
    dispatch(getNews())
    dispatch(getTransfers())
  }, [dispatch])

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])

  return (
    <div className="App" >
      <Header />
      <StandingList />
      <MainPage />
      <UpcomingList />
      <Footer />
    </div>
  )
}

export default App
