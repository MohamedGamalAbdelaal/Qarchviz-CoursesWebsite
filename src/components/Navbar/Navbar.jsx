import { useState } from "react";
import styles from "../Navbar/Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <nav
        className={`${styles.nav} position-fixed top-0 start-0 end-0 d-flex justify-content-between align-items-center px-5`}
      >
        <Link to="/">
          <img src="logo.png" className={styles.navlogo} />
        </Link>
        <div className="text-white text-decoration-none align-items-center gap-5 h-100 d-md-flex d-none">
          
          
          <NavLink className="text-decoration-none text-white" to="/getstarted">
            Get Started
          </NavLink>
          <NavLink className="text-decoration-none text-white" to="/courses">
            Courses
          </NavLink>
          <NavLink className="text-decoration-none text-white" to="/">
            Gallery
          </NavLink>
          <NavLink className="text-decoration-none text-white" to="/">
            Support
          </NavLink>
          
        </div>
        <div className="nav-collapse d-md-none d-block">
          <button
            onClick={() => setIsOpen((p) => !p)}
            className="bg-transparent text-white "
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          <div className={`${styles.navListSmall} ${isOpen && "d-none"}`}>
            <NavLink
              className="text-decoration-none text-white px-5 hover:bg-white"
              to="/"
            >
               Gallery
            </NavLink>
            <NavLink className="text-decoration-none text-white px-5" to="/getstarted">
              
               Get Started
            </NavLink>
            <NavLink className="text-decoration-none text-white px-5" to="/">
              
               Support
            </NavLink>
            <NavLink className="text-decoration-none text-white px-5" to="/courses">
              Courses
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
