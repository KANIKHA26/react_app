import React from "react";
//import  ReactDOM  from "react-dom/client";
import TestClassComp from "../classComponents/testClassComponent";
function TestComponent(){ //component is javascript code which holds html tags
    return(
        <div>
             {/* <TestClassComp/>   */}
            <h1>This is a test Functional Component
            </h1>
            <p>we are learning functional component</p>
        </div>
    );
}

export default TestComponent; //DEFAULT => NO CHANGE
/*const fc = ReactDOM.createRoot(document.getElementById('root'))
fc.render(
    <TestComponent/>
)*/
/*
function add(a,b){
    return a+b
}
console.log(add(5,10))
*/