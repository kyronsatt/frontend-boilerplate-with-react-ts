import React from 'react';
import { Route, Routes } from 'react-router-dom';

import TestProvider from '@contexts/test';

import ScreenLayout from '@organisms/screen-layout';

import NotFound from '@pages/not-found';
import Home from '@pages/home';

import PrivateRoute from './private-route';
import { HOME_PATH } from './constants';

const MainRouter: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <PrivateRoute>
            <ScreenLayout />
          </PrivateRoute>
        }
      >
        <Route
          path={HOME_PATH}
          element={
            <TestProvider>
              <Home />
            </TestProvider>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRouter;
