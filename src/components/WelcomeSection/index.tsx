import React from 'react';
import Image from 'next/image';
import WelcomePageImg from '../../../public/car-home.png';

const WelcomeSection = () => {
  return (
    <div className="md:pr-16 flex items-center gap-10 justify-around md:pl-16 pl-5 pr-5 mt-[60px] md:mt-[120px]">
      <div className="animate-animeTop">
        <h1 className="font-poppins text-3xl md:text-4xl mb-5 font-bold text-white tracking-wider lg:text-start text-center">
          Consulte a placa de um{' '}
          <span className="text-yellowMain">veículo</span>!
        </h1>
        <p className="font-poppins lg:text-start text-center text-sm md:text-lg text-white leading-6 md:leading-8 font-semibold lg:max-w-[620px]">
          Com o placa info, você consulta a placa de um veículo, de maneira
          rápida, prática e segura. <br /> Basta apenas,{' '}
          <span className="text-yellowMain">preencher o campo abaixo</span> ,
          com a placa do veículo <span className="text-yellowMain">.</span>
        </p>
        <div className="mt-12">
          <div className="flex items-center md:flex-row flex-col gap-5 justify-center lg:justify-start">
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
      <div className="lg:block hidden max-w-[520px] animate-fadeInDown">
        <Image src={WelcomePageImg} alt="car" />
      </div>
    </div>
  );
};

export default WelcomeSection;
