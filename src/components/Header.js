/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faMicrophone, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <FontAwesomeIcon icon={faArrowLeft} className="arrow-left-icons" />
      </Link>

      <div className="header-icon">
        <FontAwesomeIcon icon={faMicrophone} className="icons" />
        <FontAwesomeIcon icon={faCog} className="icons" />
      </div>
    </div>
  );
}

export default Header;
