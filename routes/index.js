var express = require('express');
var router = express.Router();
var pdfDocument = require('pdfkit');
var fs = require('fs');
var request = require('request');

var gothic = require('../public/font/gothic.js');

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

// 메인페이지
router.get('/pdf.do', function (req, res, next) {

    // Create PDF
    var doc = new pdfDocument();

    var data = [
        {label: '국어', value: 76},
        {label: '수학', value: 48},
        {label: '과학', value: 89},
        {label: '사회', value: 68},
        {label: '음악', value: 55},
        {label: '영어', value: 73},
        {label: '기술', value: 92},
        {label: '미술', value: 58},
        {label: '선택', value: 79}
    ];


    var doc = new pdfDocument();
    var page_w = doc.page.width;
    var page_h = doc.page.height;


    doc.registerFont('font', gothic);
    doc.reg
    doc.font('font');

    doc.fontSize(30)
        .text('성적 그래프', 20, 20);

// 그래프 그리기
    var margin = 20;
    var g_w = page_w - margin * 2 - 50;
    var g_x = margin + 50;
    var y = 80;
    var wpx = g_w / 100;
    for (var i = 0; i < data.length; i++) {
        var value = data[i].value;
        var label = data[i].label;
        doc.save()
            .rect(g_x, y, wpx * value, 20)
            .fill((i % 2) ? 'skyblue' : 'pink');
        doc.fontSize(10)
            .fillColor("black")
            .text(label, 30, y + 5)
            .text(value, g_x + 5, y + 5);
        y += 20 + 5;
    }

    doc.end();

    // Write headers
    res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Access-Control-Allow-Origin': '*',
        'Content-Disposition': 'attachment; filename=Untitled.pdf'
    });

    // Pipe generated PDF into response
    doc.pipe(res);

    doc.end();
});

// 라우터를 모듈로 만든다
module.exports = router;

