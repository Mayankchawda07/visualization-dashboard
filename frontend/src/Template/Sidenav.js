import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
    return (
        <>
            <nav className="sidebar sidebar-offcanvas clr" id="sidebar">
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                        <i className="icon-grid menu-icon"></i>
                            <span className="menu-title">Dashboard</span>
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/product">
                            <i className="icon-cog menu-icon"></i>
                            <span className="menu-title">Product</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/customer">
                            <i className="icon-image menu-icon"></i>
                            <span className="menu-title">Customer</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/order">
                            <i className="icon-paper menu-icon"></i>
                            <span className="menu-title">Order</span>
                        </Link>
                    </li> */}
                </ul>
            </nav>
        </>
    )
}

export default Sidenav