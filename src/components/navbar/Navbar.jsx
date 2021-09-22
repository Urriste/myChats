//React Imports
import { React, Fragment } from "react";

//External Imports
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <Link to="/" className="navbar-brand mb-0 h1 mx-2">
          MyChats
        </Link>
      </nav>
    </Fragment>
  );
};

export default Navbar;
