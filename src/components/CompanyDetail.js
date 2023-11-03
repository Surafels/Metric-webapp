// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectCompanyBySymbol } from '../redux/company/CompaniesSlice';

// const CompanyDetails = () => {
//   const { symbol } = useParams();
//   const company = useSelector(selectCompanyBySymbol(symbol));
//   const companyDetails = useSelector((state) => state.companies.companyDetails);

//   if (!company) {
//     // Handle case when company details are not found
//     return (
//       <div>
//         <p>Company details not found.</p>
//         <Link to="/">Go back</Link>
//       </div>
//     );
//   }

//   const { name, stockExchange, exchangeShortName } = company;

//   return (
//     <div>
//       <div>
//         <Link to="/">
//           <span>&larr;</span>
//         </Link>
//         <h1>Company Details</h1>
//       </div>
//       <p>Symbol: {symbol}</p>
//       <p>Name: {name}</p>
//       <p>Stock Exchange: {stockExchange}</p>
//       <p>Exchange Short Name: {exchangeShortName}</p>
//       <Link to="/">Go back</Link>
//     </div>
//   );
// };

// export default CompanyDetails;
