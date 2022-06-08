
import './App.scss';
import team from './data/teamData';
import UserTicket from './components/UserTicket/UserTicket';



function App() {
  return (    
    <div className="App">
      <div>
    <h1 className='App__heading'>Ticket Tracker</h1>
    </div>
    <div className='App__content' >
      <UserTicket teamArr={team}/>
      </div>
    </div>

  );
}

export default App;
