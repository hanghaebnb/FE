import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import ModalLogIn from '../components/modals/ModalLogIn';
import ModalSignUp from '../components/modals/ModalSignUp';

const useModal = () => {
  const [modal, setModal] = useState(false);
  const handler = () => {
    setModal(!modal);
  };
  return [modal, handler];
};

export default useModal;
