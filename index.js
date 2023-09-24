const express = require('express');
const app = express();
const PORT = 5000;

// Cấu hình EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Import route từ thư mục "routes"
const mvcRoutes = require('./routes/mvcRoutes');

// Sử dụng route
app.use('/', mvcRoutes);

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
