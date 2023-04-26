import React, { useState } from 'react';
import TheHeader from '../TheHeader';
import TheFooter from '../TheFooter';
import SubmitButton from '../Form/SubmitButton';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { successCustomizableToast } from '@/helper/Toast/Customizable';
import WarningMessageInputDefault from '../WarningMessageInputDefault';
import ErrorMessageInputDefault from '../ErrorMessageInputDefault';
import InputMask from 'react-input-mask';
import { regexpToEmail } from '@/helper/Form/regexp';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import useMedia from '@/hooks/useMedia';

type InputsTypes = {
  name: string;
  email: string;
  cellPhone: string;
  message: string;
};

const ContactComponent = () => {
  const toast = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [checkEmail, setCheckEmail] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalSuccessOpen, setModalSuccessOpen] = useState(false);
  const mobile = useMedia('(max-width: 769px)');

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    setValue,
    formState: { errors },
  } = useForm<InputsTypes>();

  const onSubmit: SubmitHandler<InputsTypes> = (data) => {
    console.log('%c⧭', 'color: #00e600', data);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast({
        status: 'success',
        title: 'Sucesso!',
        description: 'Mensagem enviada com sucesso',
        ...successCustomizableToast,
      });
      setModalSuccessOpen(true);
      setValue('cellPhone', '');
      setValue('name', '');
      setValue('email', '');
      setValue('message', '');
    }, 3000);
  };

  const handleCheckEmail = (e: any) => {
    let regexp = regexpToEmail;
    let emailIsValid = regexp.test(e.target.value);

    if (emailIsValid) {
      setCheckEmail(true);
    } else {
      setCheckEmail(false);
    }
  };

  const handleCloseModal = () => {
    setModalSuccessOpen(false);
  };

  return (
    <div className="h-screen">
      <TheHeader />

      {/* intro */}
      <div className="mt-16 mb-16">
        <h1 className="font-poppins text-xl uppercase text-gray-600 text-center">
          Contato
        </h1>
        <h2 className="font-semibold grid place-items-center mt-5 text-center text-2xl md:text-4xl text-black font-poppins tracking-wide">
          <div className="relative">
            <span className="block max-w-max before:inline-block before:w-[32px] before:h-[32px] before:rounded-lg before:bg-yellowMain before:absolute before:-z-10 before:top-2 text-center before:-left-2">
              Fale conosco
            </span>
          </div>
        </h2>

        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full lg:w-[50%] ml-auto mr-auto mt-12 pl-5 pr-5 lg:pl-0 lg:pr-0 mb-16"
          >
            <div className="flex gap-5">
              <div className="flex-1">
                <label
                  htmlFor="name"
                  className="block font-poppins font-semibold text-base text-black mb-1"
                >
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="insira seu nome"
                  className="p-2 bg-[#F7F7F7] border-solid border-[1px] border-[#EDEDED] rounded-lg w-full"
                  {...register('name', { required: true })}
                />
                {errors.name && <ErrorMessageInputDefault />}
              </div>
              <div className="flex-1" onBlur={(e) => handleCheckEmail(e)}>
                <label
                  htmlFor="email"
                  className="block font-poppins font-semibold text-base text-black mb-1 w-full"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="insira seu email"
                  className="p-2 bg-[#F7F7F7] border-solid border-[1px] border-[#EDEDED] rounded-lg w-full"
                  {...register('email', { required: true })}
                />
                {errors.email && <ErrorMessageInputDefault />}
                {!checkEmail && (
                  <ErrorMessageInputDefault message="Esse formato de email não é válido!" />
                )}
              </div>
            </div>
            <div className="mt-5">
              <label
                htmlFor="phone"
                className="block font-poppins font-semibold text-base text-black mb-1"
              >
                Telefone
              </label>
              <InputMask
                className="p-2 bg-[#F7F7F7] border-solid border-[1px] border-[#EDEDED] rounded-lg w-full"
                mask={'(99) 99999-9999'}
                alwaysShowMask={false}
                type={'tel'}
                placeholder="(99) 99999-9999"
                {...register('cellPhone', { required: true })}
              />
              {errors.cellPhone && <ErrorMessageInputDefault />}
            </div>
            <div className="mt-5">
              <label
                htmlFor="phone"
                className="block font-poppins font-semibold text-base text-black mb-1"
              >
                Mensagem
              </label>
              <textarea
                className="p-2 bg-[#F7F7F7] border-solid border-[1px] border-[#EDEDED] rounded-lg w-full"
                cols={30}
                rows={5}
                placeholder="Escreva sua mensagem"
                {...register('message', { required: true })}
              ></textarea>
              {errors.message && <ErrorMessageInputDefault />}
            </div>
            <div>
              <SubmitButton text="Enviar mensagem" loading={loading} />
              <div>
                {loading && (
                  <WarningMessageInputDefault message="Aguarde! Enviando mensagem..." />
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
      <Modal
        isOpen={true}
        onClose={handleCloseModal}
        isCentered
        size={mobile ? 'xs' : 'lg'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="grid place-items-center">
            <AiOutlineCheckCircle color="#22c55e" size="48" />

            {/* <span className="text-center text-black font-semibold text-xl font-poppins">
              Mensagem enviada com sucesso
            </span> */}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="grid place-items-center">
              <p className="font-roboto text-base text-black text-center leading-6	">
                Mensagem enviada com <span className="font-bold">sucesso</span>,
                agora só aguardar que a nossa equipe de suporte entrará em
                contato, o mais rápido possível
              </p>
              <button
                onClick={handleCloseModal}
                className="mt-8 mb-2 min-w-[120px] hover:animate-expanseButton font-poppins font-semibold text-white cursor-pointer uppercase text-base text-center p-2 rounded-md bg-red-600"
              >
                Fechar
              </button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>

      <div className="absolute min-[1720px]:bottom-0 w-full">
        <TheFooter />
      </div>
    </div>
  );
};

export default ContactComponent;
