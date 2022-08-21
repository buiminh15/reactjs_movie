import React from 'react';
import Banner from './Banner';
import Header from './Header';
import Rows from './Rows';

function MainComponent() {
  return (
    <div className="col-span-8 p-3">
      <Header />
      <Banner />
      <Rows />
    </div>
  );
}

export default MainComponent;
