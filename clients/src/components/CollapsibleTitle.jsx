import React from 'react';

export default function CollapsibleTitles({ zipCode }) {
  return (
    <div>
      <h2>Neighborhood</h2>
      <div className="neighborhood">{`Neighborhood: ${zipCode}`}</div>
    </div>
  );
}
