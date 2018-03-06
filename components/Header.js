/* eslint react/prop-types: 0 */
import React from "react";
import Link from "next/link";

const linkStyle = {
  // marginRight: 15
};

const Header = () => (
  <div className="header">
    <Link href="/">
      <a className="header__nav-item" style={linkStyle}>
        Home
      </a>
    </Link>

    <Link href="/about">
      <a className="header__nav-item" style={linkStyle}>
        About
      </a>
    </Link>
  </div>
);

export default Header;
