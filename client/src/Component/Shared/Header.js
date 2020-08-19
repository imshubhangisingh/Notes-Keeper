import React from "react";


const Header = ({ className, pages }) => {
  return (
    <nav className={"Header navbar navbar-dark bg-dark" + (className ? " " + className : "") + (pages && pages.length ? " navbar-expand-lg" : "")
    }>
      <span className="navbar-brand text-warning">Keeper</span>
    </nav>
  );
};
export default Header;
