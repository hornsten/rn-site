import head from './images/rn_head.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rolling Numbers</h1>
        <img src={head} className="head"></img>
      </header>
    </div>
  );
}

export default App;