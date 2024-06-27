import React, { useContext } from "react";
import "./App.css";
import Modal from "./Modal";
import  BlogContext  from "./BlogContext";

function App() {
  const {  isModalOpen, handleOpenModal, handleCloseModal, handleAddBlog, blog } = useContext(BlogContext);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Blog Website</h1>
        <button className="addblog" onClick={handleOpenModal}>Add new Blog</button>
      </header>
      <Modal isOpen={isModalOpen} />
      {blog && (
        <div className="blog-post">
          <img src={blog.imageUrl}  />
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
