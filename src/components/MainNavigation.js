import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css"

const active = ({isActive}) => {
	return isActive ? classes.active : undefined;
}

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={active}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/products" className={active}>Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
