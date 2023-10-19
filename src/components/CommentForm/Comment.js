// CommentList.js
import './CommentList.css'
import React, { useState } from 'react';

function CommentList({ comments, onAddComment }) {
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment) {
      onAddComment(newComment);
      setNewComment('');
    }
  }

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <div>
        <textarea value={newComment} onChange={(e) => setNewComment(e.target.value)}></textarea>
        <button onClick={handleAddComment}>Add Comments</button>
      </div>
    </div>
  );
}

export default CommentList;
