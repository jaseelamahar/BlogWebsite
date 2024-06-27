import React, { useState, useContext } from 'react';
import "./Modal.css";
import  BlogContext from './BlogContext';

const Modal = ({ isOpen }) => {
  const { handleCloseModal, handleAddBlog } = useContext(BlogContext);
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    handleAddBlog({ imageUrl, title, description });
    setImageUrl('');
    setTitle('');
    setDescription('');
  };

  return (
    <div className='modal'>
      <div className='modal-content'>
        <input 
          type='text' 
          id="imageurl" 
          name="imageurl" 
          placeholder='ImageUrl'
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <input 
          type="text" 
          id="Title" 
          name="Title" 
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input 
          type="text"  
          id="description"  
          name="description" 
          placeholder='Blog Description' 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleCloseModal}>Close</button>
        <button onClick={handleSubmit}>Post Blog</button>
      </div>
    </div>
  );
};

export default Modal;
