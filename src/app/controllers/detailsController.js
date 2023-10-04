const express = require('express');
const app = express();
const router = express.Router();
const Blog = require('../models/Blog');
const Comment = require('../models/comments')
const bodyParser = require('body-parser')



class detailsController {
    showDetailsPost(req,res){
    const blogId = parseInt(req.params.id);
    const blog = Blog.getBlogById(blogId);
    console.log('ID Bài Viết là :',blogId)
    console.log(blog); // Kiểm tra xem bài viết đã được lấy chính xác chưa

    res.render('details', { blog});
    }

    addcommentDetailsPost(req,res){
        const nameUser = req.body.name;
        const comment = req.body.comment;
        const blogID = req.params.id;
        console.log(nameUser);
        console.log(comment);
        console.log(blogID);

        const blogs = Blog.addComment(blogID,nameUser,comment);
        console.log(blogs);
        if (!blogs) {
            // Xử lý trường hợp bài viết không tồn tại
            res.status(404).send("Bài viết không tồn tại.");
            return;
        }
        res.redirect(`/details/${blogID}`);
        res.render('details', { blogs });
    }

    addComment(req, res) {
        const comment = req.body.comment;
        const name = req.body.name;
        const blogID = req.params.id;
    
        // Sử dụng models Comment để thêm bình luận
        const comments = Comment.addComment(blogID,name, comment);
        console.log('CMT mới',comments);

        // Sau khi thêm bình luận, chuyển hướng hoặc render lại trang chi tiết
        res.redirect(`/details/${blogID}`);
    }
    editPost(req,res){
        const blogId = req.params.id; // Lấy id bài viết từ đường dẫn
        const blog = Blog.getBlogById(blogId); // Lấy bài viết dựa trên id
        if (!blog) {
            // Xử lý nếu bài viết không tồn tại
            res.status(404).send("Bài viết không tồn tại.");
            return;
        }
        res.render('editPost', { blog });
    }
    updatePost(req,res){
    const blogId = req.params.id;
    const updatedContent = req.body.content;

    // Gọi hàm xử lý cập nhật bài viết
    const updatedBlog = Blog.updateBlog(blogId, updatedContent);

    if (!updatedBlog) {
        // Bài viết không tồn tại, xử lý lỗi tại đây nếu cần
        res.status(404).send('Bài viết không tồn tại.');
        return;
    }

    // Sau khi cập nhật thành công, chuyển hướng người dùng hoặc render lại trang
    res.redirect('/'); // Chuyển hướng đến trang home hoặc thực hiện xử lý khác
    }

    deletePost(req,res){
    const blogId = req.params.id;
    const deleteBlog = Blog.deleteBlog(blogId)

    if (!deleteBlog) {
        // Bài viết không tồn tại, xử lý lỗi tại đây nếu cần
        res.status(404).send('Bài viết không tồn tại.');
        return;
    }

    // Sau khi cập nhật thành công, chuyển hướng người dùng hoặc render lại trang
    res.redirect('/'); // Chuyển hướng đến trang home hoặc thực hiện xử lý khác
    }
}

module.exports = new (detailsController)