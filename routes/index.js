var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request');
var {jsPDF} = require('jspdf');

// 메인페이지
router.get('/', function (req, res, next) {

    console.log(req.query.id);
    // 결과를 rmr페이지로 렌더링(서버로부터 HTML파일을 받아 브라우저에 뿌림)
    if (req.query.id === undefined) {
        res.render('rmr', {id: 0});
    }
    if (req.query.id != undefined) {
        res.render('rmr', {id: req.query.id});
    }
});
router.get('/pdf', function (req, res, next) {

    res.render('pdf', {id: req.query.id});
});

// pdf 페이지
router.get('/pdf.do', function (req, res, next) {
    var doc = new jsPDF('p', 'mm', 'a4')

    var xml = new XMLHttpRequest();
    const myFont = xml.open("GET", "/public/font/gothic.js", true);
    doc.addFileToVFS("MyFont.ttf", myFont);
    doc.addFont("MyFont.ttf", "MyFont", "normal");
    doc.setFont("MyFont");

    doc.line(15, 19, 195, 19); // 선그리기(시작x, 시작y, 종료x, 종료y)
    doc.text(15, 40, '안녕하세요'); // 글씨입력(시작x, 시작y, 내용)
    doc.save('rmr.pdf');  //결과 출력
});

// 라우터를 모듈로 만든다
module.exports = router;

