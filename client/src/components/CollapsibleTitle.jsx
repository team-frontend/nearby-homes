import React from 'react';

const CollapsibleTitle = ({ isExpanded, zipCode, toggleCollapsibleTitle }) => {
  let className = 'collapsible-title';
  isExpanded ? (className += '-collapsible') : (className += '-collapsed');

  return (
    <>
      <h2 className={className} onClick={toggleCollapsibleTitle}>
        Neighborhood:
        {zipCode}
      </h2>
    </>
  );
};

export default CollapsibleTitle;
