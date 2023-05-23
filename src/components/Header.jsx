import { FaFortAwesome, FaSwift } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { Link } from 'react-router-dom'
import "./Header.css";

function Header() {
  return (
    <div className="container">
      <ul className="navbar"> {/* Apply the "navbar" class */}
        <li>
          <FaFortAwesome />
          <span className="span"><Link to ="/">Home</Link></span>
        </li>
        <li>
          <FaSwift />
          <span className="span"><Link to ="/recipe">Recipe</Link></span>
        </li>
        <li>
          <MdOutlineFavoriteBorder/>
          <span className="span"><Link to = "/favorite">favorites</Link></span>
        </li>
        <li>
          <FcAbout/>
          <span className="span"><Link to ="/about">About</Link></span>
        </li>
      </ul>
    </div>
  );
}

export default Header;