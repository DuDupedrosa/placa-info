import React from 'react';
import TheHeader from '../TheHeader';
import WelcomeSection from '../WelcomeSection';
import TheFooter from '../TheFooter';

const TheHome = () => {
  return (
    <div className="bg-main h-screen">
      <TheHeader />
      <WelcomeSection />
      <div className="absolute bottom-0 w-full">
        <TheFooter />
      </div>
    </div>
  );
};

export default TheHome;
