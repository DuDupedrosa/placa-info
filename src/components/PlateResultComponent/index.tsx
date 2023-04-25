import React from 'react';
import TheHeader from '../TheHeader';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
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
import {
  TableActionButton,
  TableActionButtonGreen,
  listItemStyle,
  listItemValue,
  listItemValuePrivate,
} from './style';
import { AiOutlineCopy } from 'react-icons/ai';
import { BiPrinter } from 'react-icons/bi';
import { GiPadlockOpen } from 'react-icons/gi';
import { BsArrowLeft } from 'react-icons/bs';
import Link from 'next/link';
import PriceMedalImg from '../../../public/medail-price.png';
import Image from 'next/image';
import TheFooter from '../TheFooter';

const PlateResultComponent = () => {
  const handlePlanScroll = () => {
    const sectionPlan = document.getElementById('plan');

    console.log('%c⧭', 'color: #ff0000', sectionPlan);
    if (sectionPlan) {
      sectionPlan.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          <div className="grid place-items-center">
            <Link
              href="/"
              className="justify-center mt-5 font-poppins flex items-center gap-2 max-w-max"
            >
              <BsArrowLeft color="#000000" size="20" />
              <span className="after:block after:w-[100%] max-w-max block after:h-[2px] after:bg-yellowMain font-poppins text-lg text-black font-semibold">
                Nova consulta
              </span>
            </Link>
          </div>
        </div>

        {/* tabela */}
        <div className="mt-12">
          {/* actions-buttons */}
          <div className="lg:w-[60%] w-full ml-auto mr-auto flex lg:flex-row flex-col justify-between lg:items-end">
            <button
              className={`${TableActionButtonGreen} animate-pulse`}
              onClick={handlePlanScroll}
            >
              <GiPadlockOpen color="#000000" size="23" />
              Liberar informações
            </button>
            <div className="flex lg:flex-col flex-row lg:mt-0 mt-8 justify-between items-end">
              <button className={`${TableActionButton}  mb-0 lg:mb-5`}>
                <AiOutlineCopy color="#000000" size="23" />
                Copiar
              </button>
              <button className={`${TableActionButton}`}>
                <BiPrinter color="#000000" size="23" />
                Imprimir
              </button>
            </div>
          </div>
          <ul className="mt-5 w-full lg:w-[60%] ml-auto mr-auto border-solid border-2 border-gray-400 mb-5">
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-xs md:text-lg">
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
              <span className="font-poppins font-bold text-black text-xs md:text-lg">
                Marca/Modelo
              </span>
              <span className={`${listItemValue}`}>HONDA/CG 160 START</span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-xs md:text-lg">
                Marca
              </span>
              <span className={`${listItemValue}`}>HONDA</span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-xs md:text-lg">
                Situação (Roubo/Furto)
              </span>
              <span
                className={`${listItemValuePrivate}`}
                onClick={handlePlanScroll}
              >
                Info.Bloqueada
              </span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-xs md:text-lg">
                N° do chassi
              </span>
              <span
                className={`${listItemValuePrivate}`}
                onClick={handlePlanScroll}
              >
                Info.Bloqueada
              </span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-xs md:text-lg">
                Cor
              </span>
              <span className={`${listItemValue}`}>Preta</span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-xs md:text-lg">
                Ano de fabricação
              </span>
              <span className={`${listItemValue}`}> 2021</span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-xs md:text-lg">
                Ano do modelo
              </span>
              <span className={`${listItemValue}`}>2022</span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-xs md:text-lg">
                Placa
              </span>
              <span className={`${listItemValue}`}> RKO5I97</span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-xs md:text-lg">
                Município
              </span>
              <span
                className={`${listItemValuePrivate}`}
                onClick={handlePlanScroll}
              >
                Info.Bloqueada
              </span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-xs md:text-lg">
                Estado (UF)
              </span>
              <span
                className={`${listItemValuePrivate}`}
                onClick={handlePlanScroll}
              >
                Info.Bloqueada
              </span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-xs md:text-lg">
                Submodelo
              </span>
              <span className={`${listItemValue}`}> CG</span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-xs md:text-lg">
                Versão
              </span>
              <span className={`${listItemValue}`}> START</span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-xs md:text-lg">
                Origem
              </span>
              <span className={`${listItemValue}`}>NACIONAL</span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-xs md:text-lg">
                Segmento
              </span>
              <span className={`${listItemValue}`}>Moto</span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-xs md:text-lg">
                Sub_segmento
              </span>
              <span className={`${listItemValue}`}>CITY</span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-xs md:text-lg">
                Placa Alternativa
              </span>
              <span className={`${listItemValue}`}>RKO5897</span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-xs md:text-lg">
                Renavam
              </span>
              <span
                className={`${listItemValuePrivate}`}
                onClick={handlePlanScroll}
              >
                Info.Bloqueada
              </span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-xs md:text-lg">
                DOC Parcial do Proprietário
              </span>
              <span
                className={`${listItemValuePrivate}`}
                onClick={handlePlanScroll}
              >
                Info.Bloqueada
              </span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-xs md:text-lg">
                Nome do Proprietário
              </span>
              <span
                className={`${listItemValuePrivate}`}
                onClick={handlePlanScroll}
              >
                Info.Bloqueada
              </span>
            </li>
            <li className={`${listItemStyle}`}>
              <span className="font-poppins font-bold text-black text-xs md:text-lg">
                Tipo doc proprietário
              </span>
              <span
                className={`${listItemValuePrivate}`}
                onClick={handlePlanScroll}
              >
                Info.Bloqueada
              </span>
            </li>
          </ul>
        </div>

        {/* tabela-fipe */}
        <div className="w-full lg:w-[60%] ml-auto mr-auto mb-14 mt-12">
          <div className="relative">
            <h2 className="font-poppins text-4xl font-normal text-black before:block before:absolute before:-z-10 before:w-[32px] before:h-[32px] before:rounded-lg before:bg-yellowMain before:-bottom-[2px] before:-left-[3px]">
              Tabela Fipe
            </h2>
          </div>
          <Accordion
            defaultIndex={[0]}
            allowMultiple
            className="mt-8 grid gap-5"
          >
            <AccordionItem
              bg={'#F7F7F7'}
              p={2}
              borderTop={'none'}
              borderBottom={'none'}
            >
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className="font-poppins text-[#111111] text-xl uppercase font-semibold before:inline-block before:w-[12px] before:h-[8px] before:bg-yellowMain flex items-center gap-2"
                  >
                    cg 160 start
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>

              <AccordionPanel pb={4}>
                <ul className="grid gap-2">
                  <li className="font-poppins text-2xl text-red-600 font-semibold">
                    R$ 14.266,00
                  </li>
                  <li className="font-poppins text-lg text-black">
                    <span className="font-bold">Código Fipe:</span> 811139-1
                  </li>
                  <li className="font-poppins text-lg text-black">
                    <span className="font-bold">Combustível:</span> Gasolina
                  </li>
                  <li className="font-poppins text-lg text-black">
                    <span className="font-bold">Marca:</span> HONDA
                  </li>
                  <li className="font-poppins text-lg text-black">
                    <span className="font-bold">Modelo:</span> CG 160 START
                  </li>
                  <li className="font-poppins text-lg text-black">
                    <span className="font-bold">Tipo:</span> Moto
                  </li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              bg={'#F7F7F7'}
              p={2}
              borderTop={'none'}
              borderBottom={'none'}
            >
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className="font-poppins text-[#111111] text-xl uppercase font-semibold before:inline-block before:w-[12px] before:h-[8px] before:bg-yellowMain flex items-center gap-2"
                  >
                    cg 160 start
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>

              <AccordionPanel pb={4}>
                <ul className="grid gap-2">
                  <li className="font-poppins text-2xl text-red-600 font-semibold">
                    R$ 14.266,00
                  </li>
                  <li className="font-poppins text-lg text-black">
                    <span className="font-bold">Código Fipe:</span> 811139-1
                  </li>
                  <li className="font-poppins text-lg text-black">
                    <span className="font-bold">Combustível:</span> Gasolina
                  </li>
                  <li className="font-poppins text-lg text-black">
                    <span className="font-bold">Marca:</span> HONDA
                  </li>
                  <li className="font-poppins text-lg text-black">
                    <span className="font-bold">Modelo:</span> CG 160 START
                  </li>
                  <li className="font-poppins text-lg text-black">
                    <span className="font-bold">Tipo:</span> Moto
                  </li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              bg={'#F7F7F7'}
              p={2}
              borderTop={'none'}
              borderBottom={'none'}
            >
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className="font-poppins text-[#111111] text-xl uppercase font-semibold before:inline-block before:w-[12px] before:h-[8px] before:bg-yellowMain flex items-center gap-2"
                  >
                    cg 160 start
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>

              <AccordionPanel pb={4}>
                <ul className="grid gap-2">
                  <li className="font-poppins text-2xl text-red-600 font-semibold">
                    R$ 14.266,00
                  </li>
                  <li className="font-poppins text-lg text-black">
                    <span className="font-bold">Código Fipe:</span> 811139-1
                  </li>
                  <li className="font-poppins text-lg text-black">
                    <span className="font-bold">Combustível:</span> Gasolina
                  </li>
                  <li className="font-poppins text-lg text-black">
                    <span className="font-bold">Marca:</span> HONDA
                  </li>
                  <li className="font-poppins text-lg text-black">
                    <span className="font-bold">Modelo:</span> CG 160 START
                  </li>
                  <li className="font-poppins text-lg text-black">
                    <span className="font-bold">Tipo:</span> Moto
                  </li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>

        {/* box do preço */}
        <div
          id="plan"
          className="p-5 rounded-lg border-2 border-solid border-green-600 w-full lg:w-[50%] mr-auto ml-auto mb-12 relative"
        >
          <div className="max-w-[60px] lg:max-w-[120px] absolute lg:-top-12 lg:-left-8 -top-8 -left-4">
            <Image src={PriceMedalImg} alt="Medal" />
          </div>
          <div>
            <h2 className="font-poppins text-4xl font-normal text-black text-center mb-5">
              Libere todas as informações
            </h2>
            <p className="font-poppins text-xl font-normal text-gray-600 text-center mb-5">
              Libere todas as informações sobre o veículo, pagamento via{' '}
              <span className="font-bold">pix</span>, pagamento e liberação dos
              dados <span className="font-bold">aprovados na hora.</span>
            </p>
            <h2 className="font-poppins text-4xl font-bold text-gray-600 text-center animate-pulse mb-8">
              R$ 10,00
            </h2>
            <div className="grid place-items-center">
              <button
                className={`${TableActionButtonGreen} hover:animate-pulse transition-all`}
              >
                <GiPadlockOpen color="#000000" size="23" />
                Liberar informações
              </button>
            </div>
          </div>
        </div>
      </div>
      <TheFooter />
    </div>
  );
};

export default PlateResultComponent;
