import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faMicrophone, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { companiesData } from '../redux/company/CompaniesSlice';

const Companies = () => {
  const [search, setSearch] = useState('');
  const { companies, error, isLoading } = useSelector((state) => state.companies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(companiesData());
  }, [dispatch]);

  const filteredCompanies = companies.filter((company) => company.name.toLowerCase()
    .includes(search.toLowerCase()));

  if (error) {
    return (
      <div className="message">
        Error:
        {' '}
        {error}
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="message">Loading ...</div>
    );
  }

  return (
    <>
      <div className="header">
        <p className="title">Companies</p>
        <input
          className="search"
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search company by name"
        />
        <div className="header-icon">
          <FontAwesomeIcon icon={faMicrophone} className="icons" />
          <FontAwesomeIcon icon={faCog} className="icons" />
        </div>
      </div>

      <div className="cards">
        {filteredCompanies.map((company) => (
          <Link className="link" key={company.symbol} to={`details/${company.symbol}`}>
            <div className="card">
              <span className="company-data">
              <div className="circle-container">
<FontAwesomeIcon icon={faArrowCircleRight} className="faArrowCircleRight" />
</div>
                <h3 className="symbol">{company.symbol}</h3>
                <p className="name">{company.currency}</p>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Companies;
