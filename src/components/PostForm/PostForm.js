import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PostForm.css'

function PostForm({ onNewPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert('Vui lòng điền tiêu đề và nội dung của bài viết.');
      return;
    }

    const newPost = {
      title,
      content,
      id: Date.now(), // Để đảm bảo có một id duy nhất cho mỗi bài viết
      comments: []
    };

    onNewPost(newPost);
    navigate('/'); // Chuyển đổi trang về trang chính (Home) sau khi đăng bài viết

    setTitle('');
    setContent('');
  }

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        </div>
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default PostForm;
