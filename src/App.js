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
//import Footer from './components/functionalComponents/Footer';
import Footer from './components/functionalComponents/Footer';
import Contact from './components/functionalComponents/contact';
import Signup from './components/functionalComponents/Signup';
import Reference from './components/functionalComponents/Reference';
import Memo from './components/functionalComponents/Memo';
import Callback from './components/functionalComponents/Callback';
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
          <Route path="/signup" element={<Signup />}>/</Route>
          <Route path="/Useref" element={<Reference />}>/</Route>
          <Route path="/Usememo" element={<Memo/>}>/</Route>
          <Route path="/callback" element={<Callback/>}>/</Route>

          

          
        </Routes>

      </BrowserRouter>
      
      {/* <PropsComponent name = "kani" course="MERN"/> */}
      {/* <TestClassComp/> */}
      <header className="App-header">
        {/* <TestComponent/>  */}
        {/* <StateComponent/> */}
        {/* <PropsComponent name = "kani" course="MERN"/> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <p>
          <h1 style={{backgroundColor:'blueviolet'}}>WELCOME TO MERN LEARNING</h1>
          {/* <img src="images1.png"  width={"50%"} backgroundColor={'white'}/> */}
          <img src="images1.png" />
        </p>
        <a
          // className="App-link"
          // href="https://reactjs.org"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          {/* Learn React */}
        </a>
      </header>
      
      
    <BrowserRouter>
    
      {/* <img src="images1.png" alt="image" width={"50%"} backgroundColor={'white'}/> */}
        <Footer/>  
       <Routes> 
        
        <Route path="/Contact" element={<Contact />}>/</Route>
          {/* <Route path="/About" element={<About />}>/</Route> */}
          {/* <Route path="/Experience" element={<Experience />}>/</Route> */}
          {/* <Route path="/Login" element={<Login />}>/</Route>  */}
          </Routes>

      </BrowserRouter>
      
    </div >
  );
}

export default App;
