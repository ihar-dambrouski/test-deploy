import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Home";

const Test = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState('Abababbababab')
  return (
      props.children(value)
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Test>
          {value => <p>
            Edit <code>{value}</code> and save to reload.
          </p> }
        </Test>
        <div>
        <Home />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
