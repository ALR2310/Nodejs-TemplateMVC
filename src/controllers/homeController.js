module.exports = {
    // khi người dùng truy cập endpoint http://localhost:3000/ sẽ đọc index.hbs
    index: (req, res) => {
        res.render('index.hbs')
    }
}