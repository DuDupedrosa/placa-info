import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const TheFooter = () => {
  return (
    <footer className="bg-black pb-8 pt-8 pl-5 pr-5">
      <div>
        <p className="font-poppins md:text-sm text-xs font-normal text-white text-center">
          © PlacaInfo. Todos os direitos reservados - CNPJ 41.407.806/0001-86
        </p>
      </div>
    </footer>
  );
};

export default TheFooter;
