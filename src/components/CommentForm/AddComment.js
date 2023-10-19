// AddComment.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentList from '../CommentForm/Comment';
function AddComment({ posts, onUpdate }) {
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const postToEdit = posts.find((post) => post.id === parseInt(id, 10));
    if (postToEdit) {
      setComments(postToEdit.comments || []);
    }
  }, [posts, id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedPosts = posts.map((post) => {
      if (post.id === parseInt(id, 10)) {
        return { ...post, comments };
      }
      return post;
    });

    onUpdate(updatedPosts);
  };

  const handleAddComment = (comment) => {
    setComments([...comments, comment]);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CommentList comments={comments} onAddComment={handleAddComment} />
      </form>
    </div>
  );
}

export default AddComment;
