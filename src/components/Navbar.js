import React from 'react'
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
        <Link to="/" className="navbar-brand">Abra Weather</Link>
        <div className="btn-group" role="group" aria-label="Basic example">
            <Link to="/" type="button" className="btn btn-secondary">Home</Link>
            <Link to="/favorite" type="button" className="btn btn-secondary">favorites</Link>
        </div>  
    </nav>
  )
}
