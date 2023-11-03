import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { companiesDetails } from '../redux/company/CompaniesSlice';
import Header from './Header';

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

  const { name, stockExchange, exchangeShortName } = company;

  return (
    <div>
      <Header />
      <div>
        <h1>Company Details</h1>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Symbol</th>
            <td>{symbol}</td>
          </tr>
          <tr>
            <th> Name</th>
            <td>
              {' '}
              {name}
            </td>

          </tr>
          <tr>
            <th>  Stock Exchange</th>
            <td>
              {' '}
              {stockExchange}
            </td>

          </tr>
          <tr>
            <th>Exchange Short Name</th>
            <td>{exchangeShortName}</td>

          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CompanyDetails;
