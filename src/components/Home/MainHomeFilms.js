import React from 'react';
import SliderSection from '../Slider/SliderSection';

function MainHomeFilms({ dataMovie }) {
  return (
    <ul className="mt-6 flex flex-col gap-10">
      {dataMovie &&
        Object.entries(dataMovie).filter(data => data[0] !== 'Trending').map((section, index) => (
          <li key={index}>
            <SliderSection title={section?.[0]} data={section?.[1]} />
          </li>
        ))}
    </ul>
  );
}

export default MainHomeFilms;
