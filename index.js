const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Import các route
const indexRouter = require('./routes/index');
const messageRouter = require('./routes/message');
const MSSVRouter = require('./routes/MSSV');

// Sử dụng route
app.use('/', indexRouter);
app.use('/message', messageRouter);
app.use('/:MSSV', MSSVRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
