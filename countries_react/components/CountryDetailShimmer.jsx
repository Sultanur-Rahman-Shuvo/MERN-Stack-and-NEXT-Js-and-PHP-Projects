import React from 'react';
import './CountryDetailShimmer.css';

export default function CountryDetailShimmer() {
  return (
    <main>
      <div className="country-details-container shimmer-container">
        <span className="back-button shimmer shimmer-text"></span>
        <div className="country-details">
          <div className="shimmer shimmer-flag"></div>
          <div className="details-text-container">
            <h1 className="shimmer shimmer-title"></h1>
            <div className="details-text">
              {[...Array(8)].map((el, index) => (
                <p key={index} className="shimmer shimmer-text"></p>
              ))}
            </div>
            <div className="border-countries">
              {[...Array(3)].map((el, index) => (
                <span key={index} className="shimmer shimmer-border"></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
