
import './App.scss';
import team from './data/teamData';
import UserTicket from './components/UserTicket/UserTicket';



function App() {
  return (
    <div className="App">
      <UserTicket teamArr={team}/>
    </div>
  );
}

export default App;
