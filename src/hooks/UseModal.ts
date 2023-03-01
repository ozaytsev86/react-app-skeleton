import * as React from 'react';

export const useModal = (initialValue: boolean) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(initialValue || false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggleModal = () => setIsOpen(!isOpen);
  return [isOpen, toggleModal, openModal, closeModal];
};
