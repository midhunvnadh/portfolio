import React from 'react';
import { NavLink } from 'react-router-dom';
import {BrowserRouter, Link, Route} from 'react-router-dom';
const routes = [
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
  { to: '/discover', label: 'Discover'}
];

const Nav = () => {
  const links = routes.map(({ to, label }) => {
    return <Link to={to}>
              <button class = "special-btn">
                {label}
              </button>
            </Link>}
  )

  return links;
}

export default Nav
