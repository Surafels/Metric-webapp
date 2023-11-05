import React from 'react';
import { Link } from 'react-router-dom';

function CompanyNotFound() {
  return (
    <div className="no-company">
      <h2>Page Not Found</h2>
      <p className="go-page"><Link to="/">Got to Home page</Link></p>
    </div>
  );
}

export default CompanyNotFound;
