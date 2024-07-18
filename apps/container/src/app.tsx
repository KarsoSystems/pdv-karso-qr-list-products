import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Tsr from './animations/Tsr';

const Auth = React.lazy(() => import('auth/Module'));

export function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index path="/" element={<Navigate to="/login" />} />
          <Route
            path="/login"
            element={
              <Tsr>
                <Auth />
              </Tsr>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
    // <Tsr>
    // </Tsr>
  );
}

export default App;
