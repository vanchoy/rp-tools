import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faTools,
  faDice,
  faMapMarkedAlt,
  faUserTag,
  faAddressCard,
  faBars,
  faInfoCircle,
  faBook
} from '@fortawesome/free-solid-svg-icons';

import logo from '../assets/images/dice.png';
import '../styles/header.scss';

const Header = () => {

  return (
    <header className="header clearfix">
      <a href="/" className="logo">
        <img src={logo} alt="RP Tools logo" />
        <span>Role playing tools</span>
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="menu-icon" htmlFor="menu-btn">
        <FontAwesomeIcon className="navicon" icon={faBars} size="1x" />
      </label>
      <ul className="menu">
        <li>
          <Link className="menu_item" to="/">
            <FontAwesomeIcon className="icon_menu_li" icon={faHome} size="1x" />
            Home
          </Link>
        </li>
        <li className="dropdown">
          <Link className="menu_item" to="/">
            <FontAwesomeIcon className="icon_menu_li" icon={faTools} size="1x" />
            Tools
          </Link>
          <ul className="dropdown-content">
            <li>
              <Link to="/dicepage">
                <FontAwesomeIcon className="icon_menu_li" icon={faDice} size="1x" />
                Dice Roller
              </Link>
            </li>
            <li>
              <Link to="/printablemaps">
                <FontAwesomeIcon className="icon_menu_li" icon={faMapMarkedAlt} size="1x" />
                Printable Maps
              </Link>
            </li>
            <li>
              <Link to="/namegenerator">
                <FontAwesomeIcon className="icon_menu_li" icon={faUserTag} size="1x" />
                Name Generator
              </Link>
            </li>
            <li>
              <Link to="/">
                <FontAwesomeIcon className="icon_menu_li" icon={faAddressCard} size="1x" />
                Character Sheets
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link className="menu_item" to="/about">
            <FontAwesomeIcon className="icon_menu_li" icon={faInfoCircle} size="1x" />
            About
          </Link>
        </li>
        <li>
          <Link className="menu_item" to="/documentation">
            <FontAwesomeIcon className="icon_menu_li" icon={faBook} size="1x" />
            Documentation
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
