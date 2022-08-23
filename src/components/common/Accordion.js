import React from 'react';
import CustomIcon from './CustomIcon';
import { FiChevronRight } from 'react-icons/fi';

function Accordion({ title = 'Sort' }) {
  return (
    <div className="h-10 w-full rounded bg-gray-500">
      <div className="flex h-full items-center justify-between px-2">
        <h5>{title}</h5>
        <div className="group">
          <input type="checkbox" name="toogle" id="toogle" className="hidden" />
          <label htmlFor="toogle">
            <CustomIcon
              providerStyle={{ className: 'text-white text-xl cursor-pointer' }}
              element={<FiChevronRight />}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
