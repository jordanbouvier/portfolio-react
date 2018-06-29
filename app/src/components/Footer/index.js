/*
 * Npm import
 */
import React from 'react';
import FaGithub from 'react-icons/lib/fa/github-square';
import FaLinkedin from 'react-icons/lib/fa/linkedin-square';
import FaTwitter from 'react-icons/lib/fa/twitter-square';


/*
 * Local import
 */
import Logo from 'src/components/Header/Logo';
import Text from 'src/components/Text';

/*
 * Component
 */
const Footer = () => (
  <footer id="app-footer">
    <Logo />
    <Text>Jordan Bouvier &copy; 2018</Text>
    <ul className="social-network">
      <li className="social-network-item">
        <a href="https://www.linkedin.com/in/j-bouvier/" className="social-network-link" target="_blank"><FaLinkedin /></a>
      </li>
      <li className="social-network-item">
        <a href="https://github.com/jordanbouvier" className="social-network-link" target="_blank"><FaGithub /></a>
      </li>
      <li className="social-network-item">
        <a href="https://twitter.com/jbouvier17" className="social-network-link" target="_blank"><FaTwitter /></a>
      </li>
    </ul>
  </footer>
);
export default Footer;
