import "../../css/PropsComponent.css"  //external styling

function PropsComponent(props){
    //const styleAttrs ={ // internal
   //     color:"yellow",
   //     backgroundColor:"red"
   // }
    
    return(
       // <div style={styleAttrs} >  this style is for internal styling calling inside itself
        //    Hello,{props.name}<br></br> This is {props.course} class
        //</div>
        //<div style = {{color:"brown"}} inline stlying
        <div  >  
        Hello,{props.name}<br></br> This is {props.course} class
    </div>

    )
}
export default PropsComponent;