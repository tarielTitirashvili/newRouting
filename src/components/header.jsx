import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './header.module.css'

function Header() {
  const activeClassName = ({isActive})=>isActive ? css.active : ''
  return (
    <header className={css.header}>
      <nav>
        <ul className={css.list}>
          <li><NavLink to={''} className={activeClassName} end>home</NavLink></li>
          <li><NavLink to={'products'} className={activeClassName}>products</NavLink></li>
          <li><NavLink to={'contact'} className={activeClassName}>contact</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header