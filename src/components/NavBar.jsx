// import React from 'react'
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
    <>
        <div className="nav">
            <div className="nav-links">
                <li><Link to='/' className="link">Home</Link></li>
                <li><Link to='/logo' className="link">Logo</Link></li>
                <li><Link to='/video' className="link">Video</Link></li>
                <li><Link to='https://maktezi.vercel.app/' className="link">WebDev</Link></li>
            </div>
        </div>
    </>
    )
}

export default NavBar