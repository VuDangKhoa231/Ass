import { Link, NavLink } from "react-router-dom";
function Layout(props){
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to="/Home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/Blogs">Blogs</NavLink>
                </li>
                <li>
                  <NavLink to="/Contact">Contact</NavLink> 
                </li>
                <li>
                   <NavLink to='/Profile/1/VanTTN' activeStyle={{color:'red'}}>Profile</NavLink> 
                </li>
            </ul>
        </nav>
    )
}

export default Layout;