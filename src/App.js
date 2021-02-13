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
import { useEffect } from 'react';
import {useMode} from './lib/useMode';
function App() {
  const [componentMounted] = useMode();
  if (!componentMounted) {
    return <div/>
  }

  return (
    <div className="App" >
      <Header/>
      <StandingList/>
      <MainPage/>
      <UpcomingList/>
      <div className="footer">E</div>
      
    </div>
  );
}

export default App;
