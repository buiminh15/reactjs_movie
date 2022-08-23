import React from 'react';
import Banner from './Banner';
import Header from './Header';
import Row from './Row';
import Rows from './Rows';

function MainComponent({ dataMovie }) {
  return (
    <div className="col-span-8 p-3">
      <Header />
      <Banner />
      <ul className="mt-6 flex flex-col gap-10">
        {dataMovie && Object.entries(dataMovie).map((section, index) => (
          <li key={index}>
            <Row title={section?.[0]} data={section?.[1]} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainComponent;
