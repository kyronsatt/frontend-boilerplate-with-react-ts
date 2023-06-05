import React from 'react';
import { Outlet } from 'react-router-dom';

const ScreenLayout: React.FC = () => {
  return (
    <div className="flex flex-row h-screen">
      <Outlet />
    </div>
  );
};

export default ScreenLayout;
