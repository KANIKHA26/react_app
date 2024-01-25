import logo from './logo.svg';
import './App.css';
import TestComponent from './components/functionalComponents/testComponents';
import TestClassComp from './components/classComponents/testClassComponent';
import Login from './components/classComponents/loginComponent';
import PropsComponent from './components/functionalComponents/PropsComponent';
import StateComponent from './components/classComponents/StateComponent';
function App() {
  return (
    <div className="App">
      {/* <PropsComponent name = "kani" course="MERN"/> */}
      {/* <TestClassComp/> */}
      <header className="App-header">
       {/* <TestComponent/>  */}
       <StateComponent/>
       <PropsComponent name = "kani" course="MERN"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
