import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faMicrophone, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { companiesData } from '../redux/company/CompaniesSlice';

function Header() {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(companiesData());
  };

  return (
    <div>
      <Link to="/">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>

      <div>
        <FontAwesomeIcon icon={faMicrophone} />
        <FontAwesomeIcon icon={faCog} />
      </div>

      <button type="button" onClick={handleButtonClick}>
        check fetch
      </button>
    </div>
  );
}

export default Header;
