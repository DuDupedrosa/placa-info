import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Spinner,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

interface Props {
  open: boolean;
}

const LoadingDialog = ({ open }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Modal
        closeOnOverlayClick={false}
        isOpen={open}
        isCentered
        onClose={onClose}
      >
        <ModalContent>
          <ModalHeader>Estamos fazendo sua consulta</ModalHeader>
          <ModalBody>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="#FFBF00"
              size="xl"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default LoadingDialog;
