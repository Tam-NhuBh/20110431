// EditPost.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditPost.css'
function EditPost({ posts, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');


  useEffect(() => {
    const postToEdit = posts.find((post) => post.id === parseInt(id, 10));
    if (postToEdit) {
      setTitle(postToEdit.title);
      setContent(postToEdit.content);
    }
  }, [posts, id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedPosts = posts.map((post) => {
      if (post.id === parseInt(id, 10)) {
        return { ...post, title, content };
      }
      return post;
    });

    onUpdate(updatedPosts);
    navigate('/');
  };



  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditPost;
