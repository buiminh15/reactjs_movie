import React from 'react';

function Tag({ name }) {
  return (
    <div className="border border-white bg-transparent px-3 py-2 ">
      <span className="clr-gray-500">{name}</span>
    </div>
  );
}

export default Tag;
