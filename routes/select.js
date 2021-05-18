
// 목록 버튼 입력 시
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

// post 방식으로 파라미터 전송
router.post('/', function (req, res, next) {

    let id = req.body;
    var sql = '';

    // 리스트페이지
    if (Object.keys(id).length===0 && JSON.stringify(id) === JSON.stringify({})) {
        sql = 'SELECT * FROM RMR ORDER BY id DESC';
    }
    // 상세페이지
    if (Object.keys(id).length != 0 || JSON.stringify(id) != JSON.stringify({})){
        sql = `SELECT * FROM RMR WHERE id = ${id.id} ORDER BY id DESC`;
    }
    console.log(sql);

    // json으로 받아온 객체와 mysql과 연결 
    var conn = mysql.createConnection({
        host: 'database-1.cn7wv1vrdpnl.ap-northeast-2.rds.amazonaws.com',
        user: 'biel',
        password: 'mysqlroot',
        database: 'TEST'
    });

    // 연결
    conn.connect();

    conn.query(sql, function (err, results, fields) {
console.log(results);
        if (results) {
            // 리스트페이지
            if (Object.keys(id).length===0 && JSON.stringify(id) === JSON.stringify({})) {
                // 결과만 보냄
                res.send(results);
            }
            // 상세페이지
            if (Object.keys(id).length != 0 || JSON.stringify(id) != JSON.stringify({})){
                //결과만 보냄
                res.send(results);
            }
        }
        // 연결 끝
        conn.end();
    });
});

// 라우터를 모듈로 만든다
module.exports = router;
