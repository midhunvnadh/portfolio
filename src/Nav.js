import React from 'react';
import {NavLink} from 'react-router-dom';
const routes = [
  { to: '/about', label: 'About', key: '1001'},
  { to: '/blog', label: 'Blog', key: '1002'},
  { to: '/contact', label: 'Contact', key: '1003'},
  { to: '/discover', label: 'Discover', key: '1004'}
];

const Nav = () => {
  const links = routes.map(({ to, label,key }) => {
    return <NavLink to={to} key={key}>
              <button className = "special-btn">
                {label}
              </button>
            </NavLink>}
  )

  return links;
}

export default Nav
