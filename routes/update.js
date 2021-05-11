
// 수정 버튼 입력 시
var express = require('express');
var router = express.Router();
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

    // update query
	var sql = `UPDATE RMR SET strength = ${json.strength}, coefficient = ${json.coefficient}, joint_spacing = ${json.joint_spacing}, 
		joint_length = ${json.joint_length},joint_gap = ${json.joint_gap}, asperity = ${json.asperity}, filling = ${json.filling}, 
		weathering_degree =  ${json.weathering_degree}, underground_water = ${json.underground_water} WHERE id = ${json.id}`;

	conn.query(sql, function(err, results, fields){

		// 결과를 rmr페이지로 렌더링(서버로부터 HTML파일을 받아 브라우저에 뿌림)

		if(results){
			res.send();
		}

	});
});

// 라우터를 모듈로 만든다
module.exports = router;
