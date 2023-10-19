import './PostList.css'
function PostList({ posts, onDelete }) {
  return (
    <div>
      <h2>List Post</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>Title: {post.title}</h3>
            <p>{post.content}</p>
            <button >
              <a href={`/edit/${post.id}`}>Edit</a>
            </button>
            <button >
              <a href={`/comment/${post.id}`}>Comment</a>
            </button>
            <button onClick={() => onDelete(post.id)}>Delete</button>
            
          </li>
        ))} 
      </ul>
    </div>
  );
}

export default PostList;
