var express = require('express');
 var router = express.Router();
 var db = require('../models/database'); 
 const bcrypt = require('bcrypt')
 router.get('/', function(req, res, next) {
     //chức năng trả về danh sách các record
     //phương thức request: get
     //lấy ra các record trong table
     //trả về danh sách sách dạng json
     let sql = `SELECT * FROM users`;
    db.query(sql, function(err, data) {
        res.json(data);
    });
 });
router.get('/session', (req, res) => {
    if (req.session.daDangNhap) {
        const username = req.session.username
        console.log(username);
      res.json({loggedIn: true, id :req.session.idUser, userInfo: req.session.username });
    } else {
      res.json({ loggedIn: false });
    }
});
router.post('/checkpw/:id', async (req,res) => {
    try{
        const id = req.params.id
        const pw =  req.body.password
        let sql = 'SELECT * FROM users WHERE id = ?'
        db.query(sql,id, (err,data) => {
            const old_pw = data[0].password
            console.log(old_pw);
            console.log(pw);
            const check = bcrypt.compareSync(pw,old_pw)
            if(!check){
                res.json({notification: false})
            }else{
                res.json({notification: true})
            }
        })
    }catch(e){
        console.log(e);
    }
})

router.put('/change/:id', async (req,res) => {
    try{
        const id = req.params.id
        var salt = bcrypt.genSaltSync(10)
        if(req.body.password){
            const p = req.body.password
            req.body.password = bcrypt.hashSync(p,salt)
        }
        const data = req.body
        const sql = 'UPDATE users SET ? WHERE id = ?'
        db.query(sql,[data,id],(err,user) => {
            if(user.affectedRows == 1){
                res.json({notification: 'Cập nhật thành công'})
            }else{
                res.json({notification: "Cập nhật thất bại"})
            }
        })
    }catch(e){
        console.log(e);
    }
})

 router.post('/', function(req, res, next) {//method dạng post use 
    //khi có yêu cầu  client gửi lên cái j đó để server ghi nhận
    let data = req.body; 
    let sql = 'INSERT INTO users SET ?';
    db.query(sql, data, (err, d) => {
        if (err) throw err;
        res.json({"thongbao":"Đã chèn xong thoi trang"});
    });
 });
 router.get('/:idUser', function(req, res, next) {
     //chức năng trả về chi tiết 1 record
     //phương thức request: get
     //tiếp nhận id của reord trong url
     //lấy ra record theo id từ table
     //trả về chi tiết record dạng json
     let id=req.params.idUser;   //params chứa tất cả tham số trên URL    
     let sql = 'SELECT * FROM users WHERE id = ?'    
     db.query(sql, id, (err, d) => {
        res.json(d[0]);
     });
 });
 router.put('/:id', function(req, res, next) {
    let data = req.body;
    let id = req.params.id;
    let sql = 'UPDATE users SET ? WHERE id = ?';
    db.query(sql, [data, id], (err, d) => {
        if (err) throw err;
        res.json({"thongbao": 'Đã cập nhật user'});
    });
});
router.delete('/:id', function(req, res) { 
    let id = req.params.id;
    let sql = 'DELETE FROM users WHERE id = ?'
    db.query(sql, id , (err, d) => {
        if (err) throw err;
        res.json({"thongbao": 'Đã xóa thành công'});
    }); 
});
 module.exports = router;