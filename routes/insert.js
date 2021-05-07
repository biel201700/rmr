
// 저장 버튼 입력 시 
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

	// insert query
	var sql = `INSERT INTO TEST.RMR (strength, coefficient, joint_spacing, joint_length, joint_gap, asperity, filling, weathering_degree, 
		underground_water)VALUES(${json.strength}, ${json.coefficient}, ${json.joint_spacing}, ${json.joint_length}, ${json.joint_gap}, ${json.asperity}, 
		${json.filling}, ${json.weathering_degree}, ${json.underground_water})`;

	conn.query(sql, function(err, results, fields){
  		if (results) {
    		console.log(results);
  		}
	});

	res.render('rmr', { title: 'express' });

});

module.exports = router;

