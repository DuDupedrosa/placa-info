import React from 'react';
import TheHeader from '../TheHeader';
import CarImg from '../../../public/car-sobre-img.jpg';
import Image from 'next/image';
import SimpleIcon from '../../../public/assets/handshake-simple-solid.svg';
import FileCheckIcon from '../../../public/assets/file-circle-check-solid.svg';
import MoneyIcon from '../../../public/assets/money-bill-1-wave-solid.svg';
import SafeSearchIcon from '../../../public/assets/shield-halved-solid.svg';
import UserCheckIcon from '../../../public/assets/user-shield-solid.svg';
import ConsultTimeIcon from '../../../public/assets/hourglass-start-solid.svg';
import TheFooter from '../TheFooter';

const AboutComponent = () => {
  return (
    <div className="h-screen">
      <TheHeader />
      <div className="flex gap-16 mb-20">
        <div className="mt-16 mb-12 rounded-xl lg:block hidden">
          <Image
            src={CarImg}
            alt="car"
            width={580}
            height={700}
            className="rounded-tr-xl rounded-br-xl"
          />
        </div>
        <div className="mt-16 pl-5 pr-5 md:pl-16 md:pr-16">
          <h1 className="font-semibold text-2xl md:text-3xl text-black font-poppins tracking-wide">
            <div className="relative">
              <span className="block max-w-max before:inline-block before:w-[32px] before:h-[32px] before:rounded-lg before:bg-yellowMain before:absolute before:-z-10 before:top-2 before:-left-2">
                Tenha segurança na consulta dos dados do seu veículo
              </span>
            </div>
          </h1>
          <p className="font-roboto text-black font-normal text-base max-w-[720px] leading-6 mt-5">
            Com o placa info, você pode consultar os dados de qualquer veículo,
            de forma rápida, prática e segura. Ficando por dentro, de todas as
            informações do veículo. Facilitando compras futuras, evitando que
            você compre algum carro com informações erradas e também,
            facilitando a busca de informações sobre o seu veículo.
          </p>
          <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <li className="bg-[#f5f5f5] border-[1px] border-solid border-[#f0f0f0] rounded-lg p-5">
              <Image src={SimpleIcon} alt="icon" />
              <h2 className="flex items-center gap-2 font-poppins text-lg font-semibold text-gray-800 mt-4">
                Simplicidade
              </h2>
              <p className="font-roboto text-base font-normal text-gray-800">
                Consulta simples, rápida e prática.
              </p>
            </li>
            <li className="bg-[#f5f5f5] border-[1px] border-solid border-[#f0f0f0] rounded-lg p-5">
              <Image src={FileCheckIcon} alt="icon" />
              <h2 className="flex items-center gap-2 font-poppins text-lg font-semibold text-gray-800 mt-4">
                Documento em dia
              </h2>
              <p className="font-roboto text-base font-normal text-gray-800">
                Mantenha as informações do documento do veículo sempre atualizas
              </p>
            </li>
            <li className="bg-[#f5f5f5] border-[1px] border-solid border-[#f0f0f0] rounded-lg p-5">
              <Image src={MoneyIcon} alt="icon" />
              <h2 className="flex items-center gap-2 font-poppins text-lg font-semibold text-gray-800 mt-4">
                Custo benefício
              </h2>
              <p className="font-roboto text-base font-normal text-gray-800">
                O melhor preço para a sua consulta
              </p>
            </li>
            <li className="bg-[#f5f5f5] border-[1px] border-solid border-[#f0f0f0] rounded-lg p-5">
              <Image src={SafeSearchIcon} alt="icon" />
              <h2 className="flex items-center gap-2 font-poppins text-lg font-semibold text-gray-800 mt-4">
                Consulta segura
              </h2>
              <p className="font-roboto text-base font-normal text-gray-800">
                Consulta totalmente segura
              </p>
            </li>
            <li className="bg-[#f5f5f5] border-[1px] border-solid border-[#f0f0f0] rounded-lg p-5">
              <Image src={UserCheckIcon} alt="icon" />
              <h2 className="flex items-center gap-2 font-poppins text-lg font-semibold text-gray-800 mt-4">
                Informações verdadeiras
              </h2>
              <p className="font-roboto text-base font-normal text-gray-800">
                As informações fornecidas pelo placa info, são realmente
                verdadeiras
              </p>
            </li>
            <li className="bg-[#f5f5f5] border-[1px] border-solid border-[#f0f0f0] rounded-lg p-5">
              <div className="h-[48px]">
                <Image src={ConsultTimeIcon} alt="icon" />
              </div>
              <h2 className="flex items-center gap-2 font-poppins text-lg font-semibold text-gray-800 mt-4">
                Rapidez
              </h2>
              <p className="font-roboto text-base font-normal text-gray-800">
                Consulta feita de forma rápida, sem enrolação.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <TheFooter />
    </div>
  );
};

export default AboutComponent;
