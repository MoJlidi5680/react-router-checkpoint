import React, { useState } from 'react';
import Open_card from './Open_card';

const Card = ({ el }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='card'>
      {isModalOpen ? <Open_card el={el} closeModal={handleModalClose} /> : null}

      <img src={el.image} alt="" onClick={handleModalOpen} />
    </div>
  );
};

export default Card;
