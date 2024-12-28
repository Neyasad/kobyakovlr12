import React from 'react'
import { Link } from "react-router-dom"; 
import styles from "./Nav.module.css"
import {ReactComponent as Logo} from "../pic/logo.svg"
import {ReactComponent as Calculation} from "../pic/calculation.svg"
import {ReactComponent as Measering} from "../pic/measering.svg"

function Nav() {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>
                <Link to="/"><Logo /></Link>
            </div>
        <nav>
            <ul>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/about">About us</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/faq">FAQ</Link>
                </li>
                <li>
                    <Link to="/contacts">Contacts</Link>
                </li>
                <button className='btn btn-warning btn-sm'>
                    <Link to="/measering"><Measering />Make request</Link>
                </button>
                <button className='btn btn-primary btn-sm'>
                    <Link to="/calculation"><Calculation />Calculation</Link>
                </button>
            </ul>
        </nav>
    </header>
  )
}

export default Nav