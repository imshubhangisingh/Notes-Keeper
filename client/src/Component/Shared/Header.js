import React from 'react';
//import { Link } from 'react-router-dom';

const Header = ({ dark, children, className, pages }) => {
  dark = !!dark ? 'dark' : 'light';
  return (
    <nav className={`Header navbar navbar-${dark} bg-${dark}` + (className ? ' ' + className : '')}>
      <span className='navbar-brand'>{children}</span>
    </nav>
  );
};
export default Header;