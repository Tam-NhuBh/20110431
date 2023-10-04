const blogs = [];

class Blog {
  constructor(id,content,comments) {
    this.user = [];
    this.id = id;
    this.content = content;
    this.comments = [];
  }

  static addComment(blogId,user, comment) {
    const blog = blogs.find(blog => blog.id == blogId);
    if (blog) {
        blog.user.push(user);
        blog.comments.push(comment);
        return blog;
    } else {
        return null; // hoặc bạn có thể xử lý bất kỳ cách nào phù hợp khi không tìm thấy bài viết
    }
  }

  static getAllBlogs() {
    return blogs;
  }

  static updateBlog(id, updatedContent) {
    const blogToUpdate = blogs.find(blog => blog.id == id);

    if (!blogToUpdate) {
        return null;
    }

    // Cập nhật nội dung của bài viết
    blogToUpdate.content = updatedContent;

    // Sau cập nhật, bạn có thể trả về bài viết đã cập nhật hoặc không trả về gì
    return blogToUpdate;
  }

  static getBlogById(id) {
    console.log('getblogbyID trả về ID :',id)
    return blogs.find(blog => blog.id == id);
  }

  static createBlog(content) {
    const id = blogs.length + 1;
    const newBlog = new Blog(id, content);
    blogs.push(newBlog); // Thêm bài viết mới vào mảng
    return newBlog; // Trả về bài viết mới
  }

  static deleteBlog(id) {
    const index = blogs.findIndex(blog => blog.id == id);
    if (index !== -1) {
      blogs.splice(index, 1);
      return true;
    }
    return false;
  }

  static editBlog(id, title, content) {
    const blog = blogs.find(blog => blog.id === id);
    if (blog) {
      blog.title = title;
      blog.content = content;
      return true;
    }
    return false;
  }
}

module.exports = Blog;
