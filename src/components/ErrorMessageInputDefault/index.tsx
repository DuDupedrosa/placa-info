import React from 'react';
import { GoAlert } from 'react-icons/go';
import { requiredInputMessageStyles } from './style';

interface Props {
  message?: string;
}

function ErrorMessageInputDefault({ message }: Props) {
  return (
    <span className={requiredInputMessageStyles}>
      <GoAlert className="text-red-500" />
      {message ? message : 'Esse campo é obrigatório'}
    </span>
  );
}

export default ErrorMessageInputDefault;
