import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-content">
          <Link to="/" className="nav-logo">
            <span className="logo-text">Modexia</span>
          </Link>
          
          <div className="nav-links">
            <Link to="/about">About</Link>
            <Link to="/product">Product</Link>
            <Link to="/use-cases">Use Cases</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/docs">Documentation</Link>
            <Link to="/contact" className="nav-contact-btn">Contact</Link>
          </div>

          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="mobile-menu">
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/product" onClick={() => setIsOpen(false)}>Product</Link>
            <Link to="/use-cases" onClick={() => setIsOpen(false)}>Use Cases</Link>
            <Link to="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link to="/docs" onClick={() => setIsOpen(false)}>Documentation</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
