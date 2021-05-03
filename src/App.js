import './styles/style.scss';
import Header from './components/Header';
import StandingList from './components/Standing/StangindList';
import UpcomingList from './components/UpcomingMatches/UpcomingList';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainPage from './pages/MainPages/MainPage';
import { useEffect, useContext } from 'react';
import ThemeContext, { ThemeProvider } from './contexts/theme';
import { useDispatch } from 'react-redux';
import { getSquad } from './modules/squad';
import { getMatch } from './modules/match';
import { getTeams } from './modules/teams';
function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSquad());
    dispatch(getMatch());
    dispatch(getTeams());
  }, [dispatch]);

  return (
    <ThemeProvider>
      <div className="App" >
        <Header />
        <StandingList />
        <MainPage />
        <UpcomingList />
        <div className="footer">E</div>

      </div>
    </ThemeProvider>
  );
}

export default App;
