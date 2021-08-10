import './styles/style.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import StandingList from './components/Standing/StangindList'
import UpcomingList from './components/UpcomingMatches/UpcomingList'
import MainPage from './pages/MainPages/MainPage'
import { useEffect } from 'react'
import { ThemeProvider } from './contexts/theme'
import { useDispatch } from 'react-redux'
import { getSquad } from './modules/squad'
import { getMatch } from './modules/match'
import { getTeams } from './modules/teams'
import { getNews } from './modules/news'
import { getTransfers } from './modules/transfers'
import React from 'react'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSquad())
    dispatch(getMatch())
    dispatch(getTeams())
    dispatch(getNews())
    dispatch(getTransfers())
  }, [dispatch])

  return (
    <ThemeProvider>
      <div className="App" >
        <Header />
        <StandingList />
        <MainPage />
        <UpcomingList />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
