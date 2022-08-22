import React from 'react';
import { CustomIcon } from '../common';

function SocialIcon({ icon }) {
  return (
    <div className="grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-white duration-300 hover:brightness-75">
      <CustomIcon element={icon} providerStyle={{ className: 'text-2xl text-blue-500' }} />
    </div>
  );
}

export default SocialIcon;
