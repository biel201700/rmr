
// 저장 버튼 입력 시
// express 모듈 추가 
var express = require('express');
// Router 객체를 router 변수가 참조 
var router = express.Router();
// mysql 모듈 추가
var mysql = require('mysql');

// post 방식으로 파라미터 전송
router.post('/', function(req, res, next) {

// json으로 받아온 객체와 mysql과 연결 
var json = req.body;
console.log(json);
	var conn = mysql.createConnection({
  		host : 'database-1.cn7wv1vrdpnl.ap-northeast-2.rds.amazonaws.com',
  		user : 'biel',
  		password : 'mysqlroot',
  		database : 'TEST'
	});

	// 연결 
	conn.connect();

	// insert query
	var sql = `INSERT INTO TEST.RMR (strength, coefficient, joint_spacing, joint_length, joint_gap, asperity, filling, weathering_degree, 
		underground_water, ra_btn, chk_btn, ex_edit, range_num)VALUES(${json.strength}, ${json.coefficient}, ${json.joint_spacing}, ${json.joint_length}, ${json.joint_gap}, ${json.asperity}, 
		${json.filling}, ${json.weathering_degree}, ${json.underground_water}, ${json.ra_btn}, ${json.chk_btn}, ${json.ex_edit}, ${json.range_num})`;

	conn.query(sql, function(err, results, fields){
  		if (results) {
    		console.log(results);
  		}
	});
	// 결과를 rmr페이지로 렌더링(서버로부터 HTML파일을 받아 브라우저에 뿌림)
	res.send();
});

// 라우터를 모듈로 만든다
module.exports = router;

