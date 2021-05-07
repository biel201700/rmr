var mysql = require('mysql');
var conn = mysql.createConnection({
  host : 'database-1.cn7wv1vrdpnl.ap-northeast-2.rds.amazonaws.com',
  user : 'biel',
  password : 'mysqlroot',
  database : 'TEST'
});

conn.connect();
var sql = 'INSERT INTO TEST.RMR (strength, coefficient, joint_spacing, joint_length, joint_gap, asperity, filling, weathering_degree, underground_water)VALUES(15, 3, 5, 0, 0, 0, 0, 0, 7)';
conn.query(sql, function(err, results, fields){
  if (results) {
    console.log(results);
  }
});
// var sql = 'SELECT * FROM RMR';
// conn.query(sql, (err, results, fields)=>{
//   if (results) {
//     console.log(results);
//   }
// });
// var mysql = require('mysql');
// var conn = mysql.createConnection({
//   host : 'database-1.cn7wv1vrdpnl.ap-northeast-2.rds.amazonaws.com',
//   user : 'biel',
//   password : 'mysqlroot',
//   database : 'TEST'
// });

// conn.connect();

// var sql = 'SELECT * FROM RMR';
// conn.query(sql, function(err, results, fields){
//   if (results) {
//     console.log(results);
//   }
// });


// var sql = 'UPDATE TEST.RMR SET strength = 5 WHERE id =2';
// conn.query(sql, function(err, results, fields){
//   if (results) {
//     console.log(results);
//   }
// });

// var sql = 'DELETE  FROM TEST.RMR WHERE ID =4';
// conn.query(sql, function(err, results, fields){
//   if (results) {
//     console.log(results);
//   }
// });




conn.end();