import { FaFortAwesome, FaSwift } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import "./Header.css";

function Header() {
  return (
    <div className="container">
      <ul className="navbar"> {/* Apply the "navbar" class */}
        <li>
          <FaFortAwesome />
          <span className="span">Home</span>
        </li>
        <li>
          <FaSwift />
          <span className="span">Recipe</span>
        </li>
        <li>
          <MdOutlineFavoriteBorder/>
          <span className="span">favorites</span>
        </li>
        <li>
          <FcAbout/>
          <span className="span">About</span>
        </li>
      </ul>
    </div>
  );
}

export default Header;