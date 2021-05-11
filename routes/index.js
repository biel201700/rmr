var express = require('express');
var router = express.Router();

// 메인페이지
router.get('/', function (req, res, next) {

    console.log(req.query.id);
    // 결과를 rmr페이지로 렌더링(서버로부터 HTML파일을 받아 브라우저에 뿌림)
    if(req.query.id === undefined){
        res.render('rmr',{id: 0});
    }
    if(req.query.id != undefined){
        res.render('rmr', {id: req.query.id});
    }




});

// 라우터를 모듈로 만든다
module.exports = router;

