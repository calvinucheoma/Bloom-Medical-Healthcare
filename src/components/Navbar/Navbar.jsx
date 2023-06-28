import { useState } from 'react';
import './Navbar.css';
import { IconButton, useMediaQuery } from '@mui/material';
import { Close, DragHandle } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const isMobileScreens = useMediaQuery('(max-width: 600px)');

  const navigate = useNavigate();

  return (
    <nav>
      <div className="navbar">
        <div className="navbar__logo">
          <Link to="/">
            {isMobileScreens ? <img src={Logo} alt="logo" /> : 'BLOOM'}
          </Link>
        </div>

        <div className="navbar__links">
          <ul>
            <li>
              <Link to="#about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="#contact">Contact</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
          </ul>
          <button
            className="navbar__links__button"
            onClick={() => navigate('/register')}
          >
            Try For Free
          </button>
        </div>

        <div className="navbar__mobile">
          <div className="navbar__mobile__icon">
            <IconButton className="navbar__mobile__icon__button">
              <DragHandle onClick={() => setMenuOpen(true)} />
            </IconButton>
          </div>

          {isMenuOpen && (
            <>
              <div className="navbar__mobile__overlay slide__bottom">
                <div className="navbar__mobile__icon">
                  <IconButton className="navbar__mobile__icon__button">
                    <Close onClick={() => setMenuOpen(false)} />
                  </IconButton>
                </div>
                <div className="navbar__mobile__links">
                  <ul>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/pricing">Pricing</Link>
                    </li>
                  </ul>
                  <button
                    className="navbar__links__button"
                    onClick={() => navigate('/register')}
                  >
                    Try For Free
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;