import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">HOME</Link>
      <Link to="/videos">Videos</Link>
    </nav>
  );
}

export default Navbar;
