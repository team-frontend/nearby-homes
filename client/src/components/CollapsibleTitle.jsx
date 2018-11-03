import React from 'react';

const CollapsibleTitle = ({
  handleCollapsibleTitleClick,
  zipCode,
  expanded,
}) => {
  if (expanded) {
    return (
      <div className="h2-hdp-collapsible-title-collapsible">
        <h2>
          Neighborhood:
          {zipCode}
        </h2>
        <div className="collapsible-content" style={{ display: 'block' }} />
      </div>
    );
  }
  return (
    <div
      className="h2-hdp-collapsible-title-collapsed"
      style={{ display: 'none' }}
    />
  );
};

export default CollapsibleTitle;
