import SpinnerComponent from '@/components/Spinner';
import React from 'react';

interface Props {
  text: string;
  loading: boolean;
}

const SubmitButton = ({ text, loading }: Props) => {
  return (
    <div className={`${loading && 'cursor-wait'}`}>
      <button
        type="submit"
        className={`mt-5 min-w-[240px] hover:animate-expanseButton font-poppins font-semibold text-lg uppercase text-[#332200] p-2 rounded-md bg-button-gradient ${
          loading && 'pointer-events-none'
        } `}
      >
        {loading ? <SpinnerComponent bg="#000000" size="md" /> : text}
      </button>
    </div>
  );
};

export default SubmitButton;
