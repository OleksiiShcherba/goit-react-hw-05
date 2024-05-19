import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.navigationItem, isActive && css.navigationItemActive);
};

const Navigation = () => {
  return (
    <>
      <header className={css.navigationHeader}>
        <nav className={css.navigationList}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={buildLinkClass}>
            Movies
          </NavLink>
        </nav>
      </header>
    </>
  );
};
export default Navigation;
