var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET home page. */
router.get('/', function(req, res, next) {;

console.log("목록버튼이 눌렸니?");
console.log(req.query.id);
let id = 0;
id = req.query.id;
var sql = '';
if(id == undefined){
sql = 'SELECT * FROM RMR ORDER BY id DESC';
} if(id != undefined){
	sql = `SELECT * FROM RMR WHERE id = 3 ORDER BY id DESC`;
}
console.log(id);

var conn = mysql.createConnection({
	host : 'database-1.cn7wv1vrdpnl.ap-northeast-2.rds.amazonaws.com',
	user : 'biel',
	password : 'mysqlroot',
	database : 'TEST'
});

conn.connect();


// console.log(json.id);
conn.query(sql, function(err, results, fields){
 
	 res.send(JSON.stringify(results)); // 클라이언트에 응답 보냄 
conn.end();
});
	



});

module.exports = router;
