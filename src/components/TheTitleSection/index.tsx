import React from 'react';

interface Props {
  text: string;
}

const TheTitleSection = ({ text }: Props) => {
  return (
    <h1 className="font-semibold text-2xl md:text-3xl text-black font-poppins tracking-wide">
      <div className="relative">
        <span className="block max-w-max before:inline-block before:w-[32px] before:h-[32px] before:rounded-lg before:bg-yellowMain before:absolute before:-z-10 before:top-2 before:-left-2">
          {text}
        </span>
      </div>
    </h1>
  );
};

export default TheTitleSection;
