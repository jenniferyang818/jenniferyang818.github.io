import {Link} from "react-router-dom";
import './Header.css';

// function NavItem(props) {
//     return (
//         <Link to={props.to} className="navbar-item">{props.name}</Link>
//     );
// }

function Header() {
    <div className="header">
        <p>hello</p>
        {/* <NavItem name={"Experience"} to={"/experience"}></NavItem>
        <NavItem name={"Projects"} to={"/projects"}></NavItem>
        <NavItem name={"About Me"} to={"/about"}></NavItem> */}
        <Link to="/experience">
              <button class="button">
                <span>Experience</span>
              </button>
        </Link>
    </div>

  }
  export default Header;