import { Spinner } from '@chakra-ui/react';
import React from 'react';

interface Props {
  size?: string;
  bg: string;
}

const SpinnerComponent = ({ size, bg }: Props) => {
  return (
    <>
      <Spinner
        mt="0px"
        mb="0px"
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color={bg}
        size={size ? size : 'sm'}
      />
    </>
  );
};

export default SpinnerComponent;
