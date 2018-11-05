import React from 'react';

const renderSwitch = (status) => {
  switch (status) {
    case 'FOR SALE':
      return 'for-sale-market';
    case 'FORECLOSURE':
      return 'foreclosure-market';
    case 'AUCTION':
      return 'auction-market';
    case 'OFF MARKET':
      return 'off-market';
    case 'FOR RENT':
      return 'for-rent-market';
    case 'SOLD':
      return 'sold-market';
    default:
      return null;
  }
};

const HomeStatus = (status) => {
  let className = 'icon ';
  return (
    <>
      <span className={(className += renderSwitch(status))} />
      <span className="home-status">status</span>
    </>
  );
};

export default HomeStatus;
