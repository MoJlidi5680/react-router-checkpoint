import React from 'react';

const Open_card = ({ el, closeModal }) => {
  return (
    <div className='open_card'>


        <div className="model">
               
              
                <div className="right">
                    <img src={el.image} alt="" />
                    <div className='inf' >
                    { <button onClick={closeModal}>x</button> }
                        <h1>title: {el.title}</h1>
                        <h2>description: {el.description}</h2>
                    </div>

                </div>

        </div>


    </div>
  );
};

export default Open_card;
