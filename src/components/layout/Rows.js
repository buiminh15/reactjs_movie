import React from 'react';
import Row from './Row';

function Rows() {
  return (
    <ul className="mt-6 flex flex-col gap-10">
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <li key={index}>
            <Row />
          </li>
        ))}
    </ul>
  );
}

export default Rows;
