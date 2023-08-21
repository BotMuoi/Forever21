const express = require("express");
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
var session = require('express-session');
const app = express();
const port = 3000;
app.set("view engine","ejs");
app.set("views", "./views");
app.use(express.static("public"));
var db = require("./models/database")
var apiRouter= require("./API/index")

// Parse JSON request bodies
app.use(bodyParser.json());

// Parse urlencoded request bodies
app.use(bodyParser.urlencoded({ extended: true }));


app.use(session({
    secret: 'abcdefg',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));
// Your routes and other middleware here
//===========================

app.get("/detail",(req,res)=>{
    res.render("shopDetail.ejs")
})
//=======================================

app.post('/user/luu', function(req, res) {
    let f = req.body.fullname;
    let u = req.body.username;
    let p = req.body.password;
    let em = req.body.email; 
    // let b = req.body.birthday; 
    // let ph = req.body.phone;
    const bcrypt = require("bcrypt");        
    var salt = bcrypt.genSaltSync(10);
    var pass_mahoa = bcrypt.hashSync(p, salt);

    let user_info ={userName: u, password:pass_mahoa, email:em,fullName:f};  
    let sql = 'INSERT INTO users SET ?';
    db.query(sql, user_info);
    res.redirect("/user/dangky?message=Đăng+ký+thành+công");
})

app.get('/user/dangky', function(req, res) {
    res.render("form.ejs");
});
app.get('/user/forgotPW', function(req, res) {
    res.render("forgotpassword.ejs");
});
app.get('/user/change', function(req, res) {
    res.render("changepassword.ejs");
});
app.post('/user/dangnhap_', async function(req, res) {
    let u = req.body.username;
    let p = req.body.password;
    let sql = 'SELECT * FROM users WHERE username = ?';
    db.query(sql, [u] , (err, rows) => {
        if (rows.length<=0) { res.redirect("/user/dangky?message=Sai+tài+khoản"); return;}
        let user = rows[0];
        let pass_fromdb = user.password;
        const bcrypt = require("bcrypt");
        var kq = bcrypt.compareSync(p, pass_fromdb);
        if (kq){ 
            console.log("OK");   
            var sess = req.session;  //initialize session variable
            sess.daDangNhap = true;
            sess.idUser = user.id;
            sess.username = user.fullName;                   
            //res.redirect("/thanhvien/thanhcong");
            if (sess.back){ 
                console.log(sess.back);
                res.redirect(sess.back);
            }
            else {
                res.redirect("/");
            }
        }   
        else {
            console.log("Not OK");
            res.redirect("/user/dangky?message=Sai+mật+khẩu");
        }
    });   
});

app.get('/user/thoat', function(req, res) {
    req.session.destroy();
    res.redirect("/");
});

//===========================
app.use("/API",apiRouter)
//===========================
app.get('/cat',(req,res) => {
    // const id = req.params.idCate;
    // const sqlLoai = 'SELECT * FROM loai'
    // const sqlFashion = `SELECT * FROM fashion WHERE idLoai = ${id}`
    // db.query(sqlLoai,(err,listLoai) => {
    //     if(err) throw err
    //     db.query(sqlFashion,(err,listThoiTrang) => {
    //         if(err) throw err
    //         res.render('shop',{loaiThoiTrang : listLoai,listThoiTrang : listThoiTrang})
    //     })
    // })
    res.render("shop.ejs")
})
//=================================
app.get("/fashion/:id",(req,res)=>{
    let id = req.params.id;
    let sql = `select * from loai`;
    let sqlall= `select * from fashion ORDER BY capNhat DESC`
    let sqlFashion = `select * from fashion WHERE id=${id}`;
    let sqlHinh = `select * from images WHERE idProduct=${id}`;
    db.query(sqlall, function(err, listLoaiAll) { //dòng lệnh truy xuất
        db.query(sql, function(err, listLoai) { //dòng lệnh truy xuất
            db.query(sqlFashion, function(err, data) {
                if (err) throw err;
                db.query(sqlHinh, function (err,listHinh) {
                    res.render('shopDetail',{listfashionall:listLoaiAll, loaiThoiTrang:listLoai, fashion:data[0],listHinh:listHinh});
               })
            })
        });
    });
})
app.get("/",(req,res)=>{
    res.render("shop.ejs")
})



//======================================
const quenPass = async (req, res) => {
    const mail = req.body.email;
    const ismail = await models.findEmail(mail);
    if (!ismail) {
      res.redirect("/user/register");
    } else {
      console.log(mail, process.env.APP_URL);
      mailer.sendMail(
        mail,
        "Reset password",
        `
        Bấm vào đây để thay đổi mật khẩu : <a href="${process.env.APP_URL}/user/reset/${mail}"> Reset Password </a>
        `
      );
  
      res.redirect("/user/dangnhap");
    }
  };


//======================================




app.listen(port, ()=> console.log("Ứng dụng đang chạy ở port 3000"))














