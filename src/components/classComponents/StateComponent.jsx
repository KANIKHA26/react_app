//oops concept (inheritance)
import React from "react";
class StateComponent extends React.Component{ //child(state) and parent(raect)
    constructor(){
        super()
        this.state={
            name:"KEC",
            course:"MERN"
        }
    }
    changestate = () =>{
        console.log("Kongu Engineering ")  // use state should be used when 
    }
    render()
    {
        return(
            <div>
                <h1>This is state component</h1>
                <h2>Hello,{this.state.name} and ,{this.state.course}<br></br></h2>
                <h3>I m changing the state of {this.state.name} to {this.changestate()} </h3>
                <button onMouseOver={this.changestate}>click me to change the state</button>
            </div>
        )
    }
}
export default StateComponent; 