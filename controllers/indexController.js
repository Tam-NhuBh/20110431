const mygroup = require('../models/mygroup');

exports.getAllStudents = (req, res) => {
  res.json(mygroup.getAll());
};
