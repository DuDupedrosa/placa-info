import React from 'react';
import TheHeader from '../TheHeader';
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { listItemStyle, listItemValue, listItemValuePrivate } from './style';

const PlateResultComponent = () => {
  return (
    <div>
      <TheHeader />
      <div className="pl-5 pr-5 md:pl-16 md:pr-16 mt-[120px]">
        <div>
          <h1 className="font-poppins text-4xl text-black font-semibold text-center mb-2">
            Resultado da sua consulta
          </h1>
          <h2 className="font-roboto text-xl font-normal text-gray-600 text-center">
            Consulta da placa: <span className="text-yellowMain">RKO5I97</span>
          </h2>
        </div>
        {/* tabela */}
        <div className="">
          <ul className="mt-12 w-[60%] ml-auto mr-auto border-solid border-2 border-gray-400 mb-5">
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-lg">
                Logo
              </span>
              <span>
                <img
                  src="https://fastly.picsum.photos/id/403/80/80.jpg?hmac=X7yRtu9E0iuVE_dgD1LlrvciqRo0-5W8wTuAYknglTA"
                  alt="Logo"
                />
              </span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-lg">
                Marca/Modelo
              </span>
              <span className={`${listItemValue}`}>HONDA/CG 160 START</span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-lg">
                Marca
              </span>
              <span className={`${listItemValue}`}>HONDA</span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-lg">
                Situação (Roubo/Furto)
              </span>
              <span className={`${listItemValuePrivate}`}>Info.Bloqueada</span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-lg">
                N° do chassi
              </span>
              <span className={`${listItemValuePrivate}`}>Info.Bloqueada</span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-lg">
                Cor
              </span>
              <span className={`${listItemValue}`}>Preta</span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-lg">
                Ano de fabricação
              </span>
              <span className={`${listItemValue}`}> 2021</span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-lg">
                Ano do modelo
              </span>
              <span className={`${listItemValue}`}>2022</span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-lg">
                Placa
              </span>
              <span className={`${listItemValue}`}> RKO5I97</span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-lg">
                Município
              </span>
              <span className={`${listItemValuePrivate}`}>Info.Bloqueada</span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-lg">
                Estado (UF)
              </span>
              <span className={`${listItemValuePrivate}`}>Info.Bloqueada</span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-lg">
                Submodelo
              </span>
              <span className={`${listItemValue}`}> CG</span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-lg">
                Versão
              </span>
              <span className={`${listItemValue}`}> START</span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-lg">
                Origem
              </span>
              <span className={`${listItemValue}`}>NACIONAL</span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-lg">
                Segmento
              </span>
              <span className={`${listItemValue}`}>Moto</span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-lg">
                Sub_segmento
              </span>
              <span className={`${listItemValue}`}>CITY</span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-lg">
                Placa Alternativa
              </span>
              <span className={`${listItemValue}`}>RKO5897</span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-lg">
                Renavam
              </span>
              <span className={`${listItemValuePrivate}`}>Info.Bloqueada</span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-lg">
                DOC Parcial do Proprietário
              </span>
              <span className={`${listItemValuePrivate}`}>Info.Bloqueada</span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-lg">
                Nome do Proprietário
              </span>
              <span className={`${listItemValuePrivate}`}>Info.Bloqueada</span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-lg">
                Tipo doc proprietário
              </span>
              <span className={`${listItemValuePrivate}`}>Info.Bloqueada</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlateResultComponent;
