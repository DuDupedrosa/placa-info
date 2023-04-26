import React from 'react';
import TheHeader from '../TheHeader';
import TheTitleSection from '../TheTitleSection';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';
import Link from 'next/link';
import TheFooter from '../TheFooter';

const FaqComponent = () => {
  return (
    <div>
      <TheHeader />

      {/* intro */}
      <div className="mt-12 pl-5 pr-5">
        <h1 className="font-poppins text-xl uppercase text-gray-600 text-center">
          FAQ
        </h1>
        <h2 className="font-semibold grid place-items-center mt-5 text-center text-2xl md:text-4xl text-black font-poppins tracking-wide">
          <div className="relative">
            <span className="block max-w-max before:inline-block before:w-[32px] before:h-[32px] before:rounded-lg before:bg-yellowMain before:absolute before:-z-10 before:top-2 text-center before:-left-2">
              Perguntas frequentes
            </span>
          </div>
        </h2>

        {/* accordions */}
        <div className="w-full md:w-[60%] ml-auto mr-auto mt-12">
          <Accordion allowMultiple className="mt-8 grid gap-5">
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
                    className="font-poppins text-[#111111] text-lg md:text-xl uppercase font-semibold before:inline-block before:w-[12px] before:h-[8px] before:bg-yellowMain flex items-center gap-2"
                  >
                    Como consultar a placa de um veículo?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>

              <AccordionPanel pb={4}>
                <p className="font-roboto text-base text-black font-normal leading-6	">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  doloremque adipisci incidunt nesciunt ratione minima ea ipsam
                  a laudantium commodi nemo beatae, illo reiciendis quam omnis
                  vel sit? Voluptate, quasi.
                </p>
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
                    className="font-poppins text-[#111111] text-lg md:text-xl uppercase font-semibold before:inline-block before:w-[12px] before:h-[8px] before:bg-yellowMain flex items-center gap-2"
                  >
                    Como consultar a placa de um veículo?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>

              <AccordionPanel pb={4}>
                <p className="font-roboto text-base text-black font-normal leading-6	">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  doloremque adipisci incidunt nesciunt ratione minima ea ipsam
                  a laudantium commodi nemo beatae, illo reiciendis quam omnis
                  vel sit? Voluptate, quasi.
                </p>
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
                    className="font-poppins text-[#111111] text-lg md:text-xl uppercase font-semibold before:inline-block before:w-[12px] before:h-[8px] before:bg-yellowMain flex items-center gap-2"
                  >
                    Como consultar a placa de um veículo?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>

              <AccordionPanel pb={4}>
                <p className="font-roboto text-base text-black font-normal leading-6	">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  doloremque adipisci incidunt nesciunt ratione minima ea ipsam
                  a laudantium commodi nemo beatae, illo reiciendis quam omnis
                  vel sit? Voluptate, quasi.
                </p>
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
                    className="font-poppins text-[#111111] text-lg md:text-xl uppercase font-semibold before:inline-block before:w-[12px] before:h-[8px] before:bg-yellowMain flex items-center gap-2"
                  >
                    Como consultar a placa de um veículo?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>

              <AccordionPanel pb={4}>
                <p className="font-roboto text-base text-black font-normal leading-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  doloremque adipisci incidunt nesciunt ratione minima ea ipsam
                  a laudantium commodi nemo beatae, illo reiciendis quam omnis
                  vel sit? Voluptate, quasi.
                </p>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>

        {/* ainda com dúvidas */}
        <div className="mt-12 mb-16">
          <h1 className="font-semibold grid place-items-center mt-16 text-center text-2xl md:text-4xl text-black font-poppins tracking-wide">
            <div className="relative">
              <span className="block max-w-max before:inline-block before:w-[32px] before:h-[32px] before:rounded-lg before:bg-yellowMain before:absolute before:-z-10 before:top-2 text-center before:-left-2">
                Ainda com dúvida?
              </span>
            </div>
          </h1>
          <p className="font-roboto text-gray-700 font-normal text-base text-center w-full md:w-[30%] ml-auto mr-auto mt-5 leading-6">
            Entre em contato com a nossa equipe, enviando a sua dúvida, fique a
            vontade para mandar o que estiver querendo saber, que a nossa equipe
            de suporte vai entrar em contato, respondendo a sua mensagem, o mais
            rápido possível!
          </p>
          <div className="grid place-items-center">
            <Link href="contato" className="max-w-max">
              <span className="block hover:text-yellowMain transition-all max-w-max text-gray-800 font-poppins font-semibold text-lg text-center mt-5 after:w-full after:h-[2px] after:block after:bg-yellowMain">
                Entrar em contato
              </span>
            </Link>
          </div>
        </div>
      </div>

      <TheFooter />
    </div>
  );
};

export default FaqComponent;
