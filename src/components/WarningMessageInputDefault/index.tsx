import React from 'react';
import { GoAlert } from 'react-icons/go';
import { warningInputMessage } from './style';

interface Props {
  message: string;
}

function WarningMessageInputDefault({ message }: Props) {
  return (
    <span className={warningInputMessage}>
      <GoAlert className="text-yellowMain" />
      {message}
    </span>
  );
}

export default WarningMessageInputDefault;
