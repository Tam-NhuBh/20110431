const express = require('express');
const app = express();
const router = express.Router();
const Blog = require('../models/Blog');
const bodyParser = require('body-parser')

class HomeController{
    // Hiển thị danh sách bài viết
    showBlog(req,res){
        const blogs = Blog.getAllBlogs(); // Lấy danh sách bài viết từ models
        res.render('home', { blogs }); // Truyền danh sách bài viết vào trang home.hbs
    }
    showPageCreatePost(req,res){
        res.render('createPost')
    }
    addBlog(req,res){
        if (req.body.content) {
            console.log(req.body.content)
            const newBlog = Blog.createBlog(req.body.content);
            console.log(newBlog); // In bài viết mới ra console để kiểm tra
            res.redirect('/'); // Sau khi thêm bài viết, quay lại trang chủ
          } else {
            // Xử lý nếu dữ liệu không hợp lệ hoặc không tồn tại
            res.status(400).send('Invalid content');
          }
    }
//     // Hiển thị chi tiết bài viết và các bình luận
//     router.get('/detail/:id', (req, res) => {
//         const { id } = req.params;
//         const blog = Blog.getBlogById(Number(id));
//         res.render('detail', { blog });
//     });
    
//     // Hiển thị trang tạo bài viết
//     router.get('/create', (req, res) => {
//         res.render('create');
//     });
    
//     // Xử lý việc tạo bài viết
//     router.post('/create', (req, res) => {
//         const { title, content } = req.body;
//         Blog.createBlog(title, content);
//         res.redirect('/');
//     });
    
//     // Xóa bài viết
//     router.get('/delete/:id', (req, res) => {
//         const { id } = req.params;
//         if (Blog.deleteBlog(Number(id))) {
//         res.redirect('/');
//         } else {
//         res.status(404).send('Blog not found.');
//         }
//     });
    
//     // Hiển thị trang chỉnh sửa bài viết
//     router.get('/edit/:id', (req, res) => {
//         const { id } = req.params;
//         const blog = Blog.getBlogById(Number(id));
//         if (blog) {
//         res.render('edit', { blog });
//         } else {
//         res.status(404).send('Blog not found.');
//         }
//     });
    
//     // Xử lý việc chỉnh sửa bài viết
//     router.post('/edit/:id', (req, res) => {
//         const { id } = req.params;
//         const { title, content } = req.body;
//         if (Blog.editBlog(Number(id), title, content)) {
//         res.redirect('/');
//         } else {
//         res.status(404).send('Blog not found.');
//         }
//     });
    
//     // Xử lý việc thêm bình luận
//     router.post('/comment/:id', (req, res) => {
//         const { id } = req.params;
//         const { comment } = req.body;
//         const blog = Blog.getBlogById(Number(id));
//         if (blog) {
//         blog.addComment(comment);
//         res.redirect(`/detail/${id}`);
//         } else {
//         res.status(404).send('Blog not found.');
//         }
// }
}


module.exports = new HomeController();