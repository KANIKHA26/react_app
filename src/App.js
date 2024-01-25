import logo from './logo.svg';
import './App.css';
import TestComponent from './components/functionalComponents/testComponents';
import TestClassComp from './components/classComponents/testClassComponent';
//import Login from './components/classComponents/loginComponent';
//import PropsComponent from './components/functionalComponents/PropsComponent';
//import StateComponent from './components/classComponents/StateComponent';
import NavBar from './components/functionalComponents/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Experience from './components/functionalComponents/Experience';
import Login from './components/functionalComponents/Login';
import About from './components/functionalComponents/About';
import Home from './components/functionalComponents/Home';
function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>

          {/* </Routes><Route path='/' element={<Home />}></Route> */}
          <Route path="/Home" element={<Home />}>/</Route>
          <Route path="/About" element={<About />}>/</Route>
          <Route path="/Experience" element={<Experience />}>/</Route>
          <Route path="/Login" element={<Login />}>/</Route>
        </Routes>
      </BrowserRouter>
      {/* <PropsComponent name = "kani" course="MERN"/> */}
      {/* <TestClassComp/> */}
      <header className="App-header">
        {/* <TestComponent/>  */}
        {/* <StateComponent/> */}
        {/* <PropsComponent name = "kani" course="MERN"/> */}
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
    </div >
  );
}

export default App;
