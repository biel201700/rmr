var express = require('express');
var router = express.Router();

// 메인페이지
router.get('/', function(req, res, next) {
  res.render('rmr', { title: 'express' }); // 클라이언트에 응답 보냄 
});

// 라우터를 모듈로 만든다
module.exports = router;

