import { Link } from "react-router-dom";
import classes from "./NavBar.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link activeclassname={classes.active}>Go To Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
