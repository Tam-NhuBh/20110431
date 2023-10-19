import PostForm from './components/PostForm/PostForm';
import PostList from './components/PostList/PostList';
import EditPost from './components/EditPost/EditPost';
import Header from './components/Header/Header';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddComment from './components/CommentForm/AddComment';


function App() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    // Kiểm tra xem có dữ liệu đã lưu trong Local Storage hay chưa
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      const parsedPosts = JSON.parse(storedPosts);
      setPosts(parsedPosts);
    }
  }, []);

  const handleNewPost = (newPost) => {
    // Thêm bài viết mới vào danh sách và lưu vào Local Storage
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const handleUpdate = (updatedPosts) => {
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };  


  

  const handleDelete = (postId) => {
    // Lọc ra danh sách bài viết mà postId không trùng với postId cần xóa
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<PostList posts={posts} onDelete={handleDelete} />} />
        <Route path="/add" element={<PostForm onNewPost={handleNewPost} />} />
        <Route path="/edit/:id" element={<EditPost posts={posts} onUpdate={handleUpdate} />} />
        <Route path="/comment/:id" element={<AddComment posts={posts} onUpdate={handleUpdate} />} />
      </Routes>
    </div>
  );
}

export default App;
