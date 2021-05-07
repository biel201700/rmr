
// 수정 버튼 입력 시
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.post('/', function(req, res, next) {

// json으로 받아온 객체와 mysql과 연결 
var json = req.body;
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
		weathering_degree =  ${json.weathering_degree}, underground_water = ${json.underground_water} WHERE id =3`;

	conn.query(sql, function(err, results, fields){

 		// update 시에는 반환 안하고 전달만 함
		res.render('rmr', { title: 'express' });

	});
});

module.exports = router;
