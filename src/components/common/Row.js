import React from 'react';

function Row({ colNum = 2, rowStyles, children }) {
  return <div className={`grid ${colNum === 2 ? 'grid-cols-2' : 'grid-cols-1'} gap-x-4 gap-y-10 ${rowStyles}`}>{children}</div>;
}

export default Row;
