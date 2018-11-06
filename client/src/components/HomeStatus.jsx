import React from 'react';

let res;
const renderSwitch = (status) => {
  switch (status) {
    case 'FOR SALE':
      res = 'for-sale-market';
      break;
    case 'FORECLOSURE':
      res = 'foreclosure-market';
      break;
    case 'AUCTION':
      res = 'auction-market';
      break;
    case 'OFF MARKET':
      res = 'off-market';
      break;
    case 'FOR RENT':
      res = 'for-rent-market';
      break;
    case 'SOLD':
      res = 'sold-market';
      break;
    default:
      return null;
  }
};

const HomeStatus = ({ status }) => {
  renderSwitch(status);
  const iconStatus = res;
  const className = `icon-${iconStatus}`;
  return (
    <>
      <span className={className} />
      <span className="home-status">{status}</span>
    </>
  );
};

export default HomeStatus;
