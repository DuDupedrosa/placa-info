import ContactComponent from '@/components/ContactComponent';
import TheFooter from '@/components/TheFooter';
import TheHeader from '@/components/TheHeader';
import React from 'react';

const contato = () => {
  return (
    // macetin para quando o footer não quiser ficar embaixo :)
    <div className="flex flex-col justify-between h-screen">
      <TheHeader />
      <ContactComponent />
      <TheFooter />
    </div>
  );
};

export default contato;
