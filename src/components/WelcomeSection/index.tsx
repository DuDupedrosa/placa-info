import React, { useState } from 'react';
import Image from 'next/image';
import WelcomePageImg from '../../../public/car-home.png';
import LoadingDialog from '../LoadingDialog';
import { SubmitHandler, useForm } from 'react-hook-form';
import ErrorMessageInputDefault from '../ErrorMessageInputDefault';
import SpinnerComponent from '../Spinner';
import WarningMessageInputDefault from '../WarningMessageInputDefault';
import useMedia from '@/hooks/useMedia';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';
import { successDefaultToast } from '@/helper/Toast/Default';
import { successCustomizableToast } from '@/helper/Toast/Customizable';

type InputsTypes = {
  plate: string;
};

const WelcomeSection = () => {
  // loading vai ser substituido pelo react-query
  const [loading, setLoading] = useState<boolean>(false);
  const mobile = useMedia('(max-width: 769px)');
  const router = useRouter();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm<InputsTypes>();

  const onSubmit: SubmitHandler<InputsTypes> = (data) => {
    console.log('%c⧭', 'color: #00e600', data);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      router.push('/resultado');
      toast({
        status: 'success',
        title: 'Consulta feita com sucesso',
        description: 'Sua consulta foi feita com sucesso.',
        ...successCustomizableToast,
      });
    }, 3000);
  };

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
        <form onSubmit={handleSubmit(onSubmit)} className="mt-12">
          <div className="flex items-center md:flex-row flex-col gap-5 justify-center lg:justify-start">
            <div>
              <input
                placeholder="xxx-xxx"
                type="text"
                id="plateNumber"
                className="bg-slate-100 rounded-lg p-2 md:min-h-44px font-poppins text-lg font-semibold text-center text-black md:min-w-[280px]"
                {...register('plate', { required: true })}
              />
            </div>
            {mobile && (
              <div>{errors.plate && <ErrorMessageInputDefault />}</div>
            )}
            {mobile && (
              <div>
                {loading && (
                  <WarningMessageInputDefault message="Aguarde! Estamos fazendo sua busca" />
                )}
              </div>
            )}
            <div className={`${loading && 'cursor-wait'}`}>
              <button
                className={`font-poppins text-lg text-buttonBrown font-semibold rounded-lg hover:opacity-30 transition-all p-2 uppercase bg-button-gradient min-w-[140px] ${
                  loading && 'pointer-events-none opacity-40'
                }`}
              >
                {loading ? (
                  <SpinnerComponent bg="#000000" size="md" />
                ) : (
                  'Consultar'
                )}
              </button>
            </div>
          </div>
          {errors.plate && !mobile && <ErrorMessageInputDefault />}
          {loading && !mobile && (
            <WarningMessageInputDefault message="Aguarde! Estamos fazendo sua busca" />
          )}
        </form>
      </div>
      <div className="lg:block hidden max-w-[520px] animate-fadeInDown">
        <Image src={WelcomePageImg} alt="car" />
      </div>
    </div>
  );
};

export default WelcomeSection;
