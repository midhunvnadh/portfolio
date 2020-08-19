import React from 'react';
import {NavLink} from 'react-router-dom';
const routes = [
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
  { to: '/discover', label: 'Discover'}
];

const Nav = () => {
  const links = routes.map(({ to, label }) => {
    return <NavLink to={to}>
              <button className = "special-btn">
                {label}
              </button>
            </NavLink>}
  )

  return links;
}

export default Nav
