import "../../css/NavBar.css"
//import { Link } from "react"
import { Link } from "react-router-dom";

const NavBar=()=>{
    return(
        
        <ol>
            <li><Link to ='/Home'>Home</Link></li>
            <li><Link to ='/About'>About</Link></li>
            <li><Link to ='/Experience'>Experience</Link></li>
            <li><Link to ='/Login'>Login</Link></li>
            <li><Link to ='/Useref'>Useref</Link></li>
            <li><Link to ='/Usememo'>Usememo</Link></li>
            <li><Link to ='/callback'>callback</Link></li>
        </ol>
    )

}
export default NavBar