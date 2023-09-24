// controllers/mvcController.js

const mygroup = require('../models/mvcModel');

exports.getAll = (req, res) => {
  res.json(mygroup);
};

exports.getMSSV = (req, res) => {
  const { MSSV } = req.params;
  const student = mygroup.find((item) => item.id === MSSV);

  if (!student) {
    return res.json({ error: 'not valid' });
  }

  res.json(student);
};

exports.postMessage = (req, res) => {
  const { MSSV, id } = req.params;
  const { body } = req;

  // Kiểm tra xem MSSV có trong danh sách không
  const student = mygroup.find((item) => item.id === MSSV);

  if (!student) {
    return res.json({ error: 'not valid' });
  }

  // Kiểm tra xem id đã tồn tại trong danh sách chưa
  const exist = student.posts.find((post) => post.id === id);

  if (exist) {
    return res.json({ error: 'not valid' });
  }

  // Thêm bài đăng mới
  student.posts.push({ id, body });
  res.json(student.posts);
};

exports.getMessage = (req, res) => {
  const { id } = req.params;

  if (!id) {
    const studentNames = mygroup.map((student) => student.name);
    return res.render('students', { studentNames });
  }

  const student = mygroup.find((item) => item.id === id);

  if (!student) {
    return res.json({ error: 'not valid' });
  }

  res.render('student', { student });
};
