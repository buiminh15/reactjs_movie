import React from 'react';

function Row({ colNum = 2, children }) {
  return <div className={`grid ${colNum === 2 ? 'grid-cols-2' : 'grid-cols-1'} gap-x-4 gap-y-6`}>{children}</div>;
}

export default Row;
