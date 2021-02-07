import './styles/style.scss';
import Header from './components/Header';
import StandingList from './components/Standing/StangindList';
import UpcomingList from './components/UpcomingMatches/UpcomingList';
function App() {
  return (
    <div className="App">
      <Header/>
      <StandingList/>
      <div className="middle">C</div>
      <UpcomingList/>
      <div className="footer">E</div>
    </div>
  );
}

export default App;
