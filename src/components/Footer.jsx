import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
        <p>Copyright &copy; 2022</p>
        <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/home">Tasks</Link>
        <Link to="/about">About</Link>
      </div>
    </footer>
  )
}

export default Footer