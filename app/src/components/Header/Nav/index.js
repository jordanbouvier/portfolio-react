/*
 * npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FaBars from 'react-icons/lib/fa/bars';
import FaTimes from 'react-icons/lib/fa/times-circle-o';


/*
 * Local import
 */
import Logo from 'src/components/Header/Logo';
import Link from 'src/components/Link';


/*
 * Component
 */
const Nav = ({ navOpen, actions }) => {
  const navClasses = classNames({
    nav: true,
    'nav--open': navOpen,
  });

  return (
    <nav className={navClasses}>
      <div className="nav-controls">
        <Logo />
        <div className="nav-toggle-button" onClick={actions.toggleNav}>
          {navOpen && <FaTimes />}
          {!navOpen && <FaBars />}
        </div>
      </div>
      <ul className="nav-items">
        <Link exact to="/" label="accueil" />
        <Link to="/a-propos" label="a propos" />
        <Link to="/mes-competences" label="competences" />
        <Link to="/mes-realisations" label="realisations" />
        <Link to="/contact" label="contact" />
      </ul>
    </nav>
  );
};
Nav.propTypes = {
  navOpen: PropTypes.bool,
};
Nav.defaultProps = {
  navOpen: false,
};

/*
 * Export default
 */
export default Nav;
