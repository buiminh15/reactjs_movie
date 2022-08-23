import React from 'react';
import Row from './Row';

function MainHomeFilms({ dataMovie }) {
  return (
      <ul className="mt-6 flex flex-col gap-10">
        {dataMovie && Object.entries(dataMovie).map((section, index) => (
          <li key={index}>
            <Row title={section?.[0]} data={section?.[1]} />
          </li>
        ))}
      </ul>
  );
}

export default MainHomeFilms;
