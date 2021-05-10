// 목록 버튼 입력 시
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET home page. */
router.post('/', function (req, res, next) {


    let id = req.body;
    var sql = '';


    if (Object.keys(id).length===0 && JSON.stringify(id) === JSON.stringify({})) {
        console.log("1");
        sql = 'SELECT * FROM RMR ORDER BY id DESC';
    }
    if (Object.keys(id).length != 0 || JSON.stringify(id) != JSON.stringify({})){
        console.log("2");
        sql = `SELECT * FROM RMR WHERE id = ${id.id} ORDER BY id DESC`;
    }
    console.log(sql);


    var conn = mysql.createConnection({
        host: 'database-1.cn7wv1vrdpnl.ap-northeast-2.rds.amazonaws.com',
        user: 'biel',
        password: 'mysqlroot',
        database: 'TEST'
    });

    conn.connect();

    conn.query(sql, function (err, results, fields) {

        // res.send(JSON.stringify(results)); // 클라이언트에 응답 보냄
        if (results) {


            if (Object.keys(id).length===0 && JSON.stringify(id) === JSON.stringify({})) {
                console.log("1");
                res.send(results);
            }
            if (Object.keys(id).length != 0 || JSON.stringify(id) != JSON.stringify({})){
                console.log("2");
                res.send(results);
            }


        }


        conn.end();
    });


});

module.exports = router;
