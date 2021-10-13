import head from './images/rn_head.png';
import Head from './Head/Head.js';
import Toggle from './Toggle/Toggle.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rolling Numbers</h1>
      </header>
       <Head></Head>
       <Toggle></Toggle>
      
    </div>
  );
}

export default App;