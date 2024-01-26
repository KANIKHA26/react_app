//import "../../css/NavBar.css"
//import { Link } from "react"
import "../../css/Footer.css"
import { Link } from "react-router-dom";

const Footer=()=>{
    return(
        // <img src={react-app\src\images\asian-teenage-woman-sitting-white-260nw-2264176913.webp} alt="images"/>
        
        <ol>
            <h4>&copy;REACT</h4>
            <li><Link to ='/Contact'>Contact</Link></li>
            {/* <li><Link to ='/About'>About</Link></li> */}
            {/* <li><Link to ='/linkedin'>linkedin</Link></li> */}
            {/* <li><Link to ='/github'>github</Link></li> */}
            <a href="https://www.linkedin.com/in/kanikha-m-9b6755233/">linkedin</a>
            <a href="https://github.com/topics/login">github</a>
        </ol>
    )

}
export default Footer;