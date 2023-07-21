import React, { useState } from 'react';

const Add = ({ onClose, onAddMovie , movies,setmovies }) => {
  const [formData, setFormData] = useState({
    title: '',
    genre: '',
    description: '',
    image: '',
    rate: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
   const addmovie=()=>{setmovies([...movies,formData])}
  

  return (
    <div className='add'>
      <div className="model1">
        <button onClick={onClose}>x</button>
        <div className='form'>
          <div className="l ">
            <label> title</label>
            <input className="l1" type="text" name="title" placeholder='type your title' onChange={handleInputChange} />
          </div>
          <div className="l ">
            <label> genre</label>
            <input className="l2"  type="text" name="genre" placeholder='type your genre' onChange={handleInputChange} />
          </div>
          <div className="l ">
            <label> description</label>
            <input className="l3"  type="text" name="description" placeholder='type your description' onChange={handleInputChange} />
          </div>
          <div className="l ">
            <label> image</label>
            <input className="l4"  type="text" name="image" placeholder='type your image URL' onChange={handleInputChange} />
          </div>
          <div className="l ">
            <label> rate</label>
            <input className="l5"  type="text" name="rate" placeholder='type your rate' onChange={handleInputChange} />
          </div>
          <div onClick={onClose}>
          <input type="button" value="ADD" onClick={()=>(addmovie())} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;