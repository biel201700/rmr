var express = require('express');
var router = express.Router();

// 메인페이지
router.get('/', function (req, res, next) {

    // 리스트로 페이지로 보냄
    res.render('list', {title: 'express'});
});

// 라우터를 모듈로 만든다
module.exports = router;
