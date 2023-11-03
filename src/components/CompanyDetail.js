import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { companiesDetails } from '../redux/company/CompaniesSlice';

const CompanyDetails = () => {
  const { symbol } = useParams();
  const companies = useSelector((state) => state.companies.companies);
  const companyDetails = useSelector((state) => state.companies.companyDetails);
  const isLoading = useSelector((state) => state.companies.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(companiesDetails());
  }, [dispatch]);

  const company = companies.find((company) => company.symbol === symbol);

  if (isLoading || companyDetails.length === 0) {
    // Handle case when company details are still loading
    return (
      <div>
        <p>Loading company details...</p>
        <Link to="/">Go back</Link>
      </div>
    );
  }

  if (!company) {
    // Handle case when company details are not found
    return (
      <div>
        <p>Company details not found.</p>
        <Link to="/">Go back</Link>
      </div>
    );
  }

  const { name, stockExchange, exchangeShortName } = company;

  return (
    <div>
      <div>
        <Link to="/">
          <span>&larr;</span>
        </Link>
        <h1>Company Details</h1>
      </div>
      <p>
        Symbol:
        {symbol}
      </p>
      <p>
        Name:
        {name}
      </p>
      <p>
        Stock Exchange:
        {stockExchange}
      </p>
      <p>
        Exchange Short Name:
        {exchangeShortName}
      </p>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default CompanyDetails;
