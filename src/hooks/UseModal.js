import * as React from 'react';

export const useModal = (initialValue) => {
  const [isOpen, setIsOpen] = React.useState(initialValue);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggleModal = () => setIsOpen(!isOpen);
  return [isOpen, toggleModal, openModal, closeModal];
};
