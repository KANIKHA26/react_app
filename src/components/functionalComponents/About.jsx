import { useEffect, useState } from "react";
import "../../css/about.css"
// const About = () =>{
//     const [college,updatecollege]= useState("KEC")
//     const updatingClg=()=>{
//         updatecollege("Hello react app");
//     }
//     return(
//         <div >
//             <h1>WELCOME TO {college}</h1>
//             <button onDoubleClick={updatingClg}>Update college name</button>
//         </div>
//     )
// }
// export default About;
//the above code is for usestate hook (it doesnt go to prevoius state so that we go to usereducers for that)
//the below code for useeffects
const About = () =>{
    const [tabName,setTabName]= useState("You dont have any disease ,,please dont take any pills")
    const updateTablet = () =>{
        setTabName("welcome to cold club");
    }
    const updateTablet1 = () =>{
        setTabName("welcome to fever club");
    }
    const updateTablet2 = () =>{
        setTabName("welcome to seizure club if you hurt by epilespy" );
    }
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
        // console.log("side effects causes sleepy and drowsiness")
    },[tabName])
    return(
        <div >
            <h1>{tabName}</h1>
            <button onClick={updateTablet}>Click me if u  get cold </button>
            <button onClick={updateTablet1}>Click me if u  fever cold </button>
            <button onClick={updateTablet2}>Click me if u get epilepsy  </button>
        </div>
    )
}
export default About;