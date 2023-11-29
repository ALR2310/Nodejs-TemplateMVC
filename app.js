const express = require('express')
const cookieParser = require('cookie-parser')
const handlebars = require('express-handlebars')
const morgan = require('morgan')
const path = require('path')
const app = express()
const port = 3000
const host = 'localhost';

// HTTP Logger (Ghi lại nhật kí http)
app.use(morgan('combined'))

// Middleware (Trung gian xử lý dữ liệu)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// View Engine (Khai báo engine - Phần xử lý giao diện)
app.engine('hbs', handlebars({ extname: '.hbs' }))
app.set('view engine', 'hbs')

// Set views Folder (Đặt đường dẫn đến thư mục views)
app.set('views', path.join(__dirname, 'src/views'))

// Set Static Folder (Đặt đường dẫn đến thư mục public)
app.use(express.static(path.join(__dirname, 'public')))

// Routes (Định tuyến đường URL)
app.use('/', require(path.join(__dirname, 'src/routers/homeRouter')))

// Open Server (Mở Server) 
app.listen(port, () => console.log(`Server đang chạy trên http://${host}:${port}`))