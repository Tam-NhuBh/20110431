const mygroup = require('../models/mvcModel');

exports.getAll = (req, res) => {
  res.json(mygroup);
};

exports.getMessage = (req, res) => {
  const { id } = req.params;

  if (!id) {
    // Nếu không có id, hiển thị danh sách tất cả sinh viên
    res.json( mygroup );
  } else {
    // Nếu có id, tìm sinh viên có mã id tương ứng và hiển thị
    const student = mygroup.find((item) => item.id === id);
    if (!student) {
      return res.json({ error: 'not valid' });
    }

    res.json( student );
  }
};

exports.postStudent = (req, res) => {
  const { id, name } = req.params; //lấy dữ liệu gửi đến từ client

  // Kiểm tra xem id và name có tồn tại
  if (!id || !name) {
    return res.json({ error: 'Mã sinh viên (id) và tên sinh viên (name) là bắt buộc.' });
  }

  // Kiểm tra xem id đã tồn tại trong danh sách chưa
  const existingStudent = mygroup.find((student) => student.id === id);

  if (existingStudent) {
    return res.json({ error: 'Mã sinh viên (id) đã tồn tại trong danh sách.' });
  }

  // Thêm sinh viên mới vào danh sách
  mygroup.push({id, name});

  // Trả về danh sách sau khi thêm mới
  res.json(mygroup);
  
};
