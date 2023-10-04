const comments = []; // Khai báo mảng để lưu trữ các đối tượng bình luận

class Comment {
  constructor(id, user, comments) {
    this.id = id;
    this.user = user;
    this.comment = comment;
  }

  // Hàm thêm bình luận mới vào mảng comments
  static addComment(comment, user) {
    const id = comments.length + 1;
    const newComment = new Comment(comment, user);
    comments.push(newComment);
    return newComment;
}


  // Hàm lấy danh sách tất cả các bình luận
  static getAllComments() {
    return comments;
  }
}

module.exports = Comment;
