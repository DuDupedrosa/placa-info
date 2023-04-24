import React from 'react';
import WelcomePageImg from '../../../public/welcome-page-img.png';
import Image from 'next/image';

const WelcomeSection = () => {
  return (
    <div className="md:pr-16 md:pl-16 pl-5 pr-5 mt-[60px] md:mt-[220px]">
      <div className="animate-animeTop">
        <h1 className="font-poppins text-3xl md:text-4xl mb-5 font-bold text-white tracking-wider text-center">
          Consulte a placa de um{' '}
          <span className="text-yellowMain">veículo</span>!
        </h1>
        <p className="font-poppins text-sm md:text-lg text-white leading-6 md:leading-8 font-semibold text-center">
          Com o placa info, você consulta a placa de um veículo, de maneira
          rápida, prática e segura. <br /> Basta apenas,{' '}
          <span className="text-yellowMain">preencher o campo abaixo</span> ,
          com a placa do veículo <span className="text-yellowMain">.</span>
        </p>
        <div className="mt-12 grid place-items-center">
          <div className="flex items-center md:flex-row flex-col gap-5">
            <div>
              <input
                placeholder="xxx-xxx"
                type="text"
                name="plateNumber"
                id="plateNumber"
                className="bg-slate-100 rounded-lg p-2 md:min-h-44px font-poppins text-lg font-semibold text-center text-black md:min-w-[280px]"
              />
            </div>
            <div>
              <button className="font-poppins text-lg text-buttonBrown font-semibold rounded-lg hover:opacity-30 transition-all p-2 uppercase bg-button-gradient min-w-[140px]">
                Consultar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
