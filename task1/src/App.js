import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>{process.env.REACT_APP_KEY_APPNAME}</h1>
          <h2>{process.env.REACT_APP_KEY_VERSION}</h2>
          <h3>{process.env.REACT_APP_KEY_USE_MODE}</h3>
          <h4>{process.env.REACT_APP_KEY_SECRET}</h4>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        </header>
          Learn React
        </div>);
}

export default App;
