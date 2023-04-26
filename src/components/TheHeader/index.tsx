import Link from 'next/link';
import React from 'react';
import IconCar from '../../../public/assets/logo-car-icon.svg';
import Image from 'next/image';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
} from '@chakra-ui/react';
import { SlMenu } from 'react-icons/sl';

const TheHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<any>();

  return (
    <header className="bg-black pb-8 pt-8">
      <div className="flex gap-5 justify-between md:flex-row pl-5 pr-5 md:pl-16 md:pr-16">
        <div className="font-poppins text-2xl cursor-pointer tracking-wider	text-white font-semibold uppercase">
          <Link href="/" className="flex items-center gap-2">
            <Image src={IconCar} alt="car" />
            <p>
              Placa<span className="text-yellowMain">Info</span>
            </p>
          </Link>
        </div>
        {/* menu-mobile */}
        <div>
          <div ref={btnRef} onClick={onOpen} className="md:hidden block">
            <SlMenu color="#ffffff" size="32" />
          </div>
        </div>
        <ul className="md:flex gap-8 justify-center hidden">
          <li
            className="font-poppins text-lg text-white font-semibold cursor-pointer after:block after:w-0 hover:after:w-full 
              after:h-[2px] after:bg-yellowMain after:rounded-lg after:transition-all"
          >
            <Link href="consulta">Consulta</Link>
          </li>
          <li
            className="font-poppins text-lg text-white font-semibold cursor-pointer after:block after:w-0 hover:after:w-full 
              after:h-[2px] after:bg-yellowMain after:rounded-lg after:transition-all"
          >
            <Link href="sobre">Porque utilizar</Link>
          </li>
          <li
            className="font-poppins text-lg text-white font-semibold cursor-pointer after:block after:w-0 hover:after:w-full 
              after:h-[2px] after:bg-yellowMain after:rounded-lg after:transition-all"
          >
            <Link href="consulta">Contato</Link>
          </li>
          <li
            className="font-poppins text-lg text-white font-semibold cursor-pointer after:block after:w-0 hover:after:w-full 
              after:h-[2px] after:bg-yellowMain after:rounded-lg after:transition-all"
          >
            <Link href="consulta">FAQ</Link>
          </li>
        </ul>
      </div>

      {/* menu-mobile */}
      <div>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <ul className="flex gap-6 flex-col justify-center mt-2">
                <li className="font-poppins text-lg text-black font-semibold cursor-pointer ">
                  <Link
                    href="consulta"
                    className="before:block before:w-[10px] before:h-[10px] before:rounded-full before:bg-yellowMain flex items-center gap-2  "
                  >
                    Consulta
                  </Link>
                </li>
                <li className="font-poppins text-lg text-black font-semibold cursor-pointer ">
                  <Link
                    href="consulta"
                    className="before:block before:w-[10px] before:h-[10px] before:rounded-full before:bg-yellowMain flex items-center gap-2  "
                  >
                    Sobre
                  </Link>
                </li>
                <li className="font-poppins text-lg text-black font-semibold cursor-pointer ">
                  <Link
                    href="consulta"
                    className="before:block before:w-[10px] before:h-[10px] before:rounded-full before:bg-yellowMain flex items-center gap-2  "
                  >
                    Contato
                  </Link>
                </li>
                <li className="font-poppins text-lg text-black font-semibold cursor-pointer ">
                  <Link
                    href="consulta"
                    className="before:block before:w-[10px] before:h-[10px] before:rounded-full before:bg-yellowMain flex items-center gap-2  "
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};

export default TheHeader;
