var express = require('express');
 var router = express.Router();
 var db = require('../models/database'); 
 router.get('/', function(req, res, next) {
     //chức năng trả về danh sách các record
     //phương thức request: get
     //lấy ra các record trong table
     //trả về danh sách sách dạng json
     let sql = `SELECT * FROM fashion`;
    db.query(sql, function(err, data) {
        res.json(data);
    });
 });
 router.get('/images/:id', function(req, res, next) {
    let id= req.params.id
    let sql = `SELECT * FROM images WHERE idProduct = ?`;
    db.query(sql,id, function(err, data) {
        res.json(data);
    });
 });
 router.post('/', function(req, res, next) {//method dạng post use
    //khi có yêu cầu  client gửi lên cái j đó để server ghi nhận
    let data = req.body;
    let sql = 'INSERT INTO fashion SET ?';
    db.query(sql, data, (err, d) => {
        if (err) throw err;
        res.json({"thongbao":"Đã chèn xong thoi trang"});
    });
 });
 router.get('/:idFashion', function(req, res, next) {
     //chức năng trả về chi tiết 1 record
     //phương thức request: get
     //tiếp nhận id của reord trong url
     //lấy ra record theo id từ table
     //trả về chi tiết record dạng json
     let id=req.params.idFashion;   //params chứa tất cả tham số trên URL    
     let sql = `SELECT * FROM fashion WHERE id = ${id}`
     db.query(sql, id, (err, d) => {
        res.json(d[0]);
     });
 });
 router.get('/loai/:idFashion', function(req, res, next) {
     //chức năng trả về chi tiết 1 record
     //phương thức request: get
     //tiếp nhận id của reord trong url
     //lấy ra record theo id từ table
     //trả về chi tiết record dạng json
     let id=req.params.idFashion;   //params chứa tất cả tham số trên URL
     let sql = `SELECT * FROM fashion WHERE idLoai = ${id}`  
     db.query(sql, id, (err, d) => {
        res.json(d);
     });
 });
 router.put('/:id', function(req, res, next) {
    let data = req.body;
    let id = req.params.id;
    let sql = 'UPDATE fashion SET ? WHERE id = ?';
    db.query(sql, [data, id], (err, d) => {
        if (err) throw err;
        res.json({"thongbao": 'Đã cập nhật sách'});
    });
});
router.delete('/:id', function(req, res) {
    let id = req.params.id;
    let sql = 'DELETE FROM fashion WHERE id = ?'
    db.query(sql, id , (err, d) => {
        if (err) throw err;
        res.json({"thongbao": 'Đã xóa thành công'});
    });
});
 module.exports = router;