/* 
해야할거
-로그인 시스템 <= 생활코딩 패스포트 공부 (google, twiter, facebook)
-글쓰기 <= 기능찾아보기
-게시판 <= 기능 찾아보기
-탐색 알고리즘 짜기 
-댓글 시스템 <=다른 프로젝트 참고
-팔로우 시스템 <=참고
-rss 시스템 <= 공부
-프리미엄 기능 만들기 <= 공부
-결제 기능 만들기 <= 공부
-구글 애드센스 기능 만들기 <=플젝 참고
*/

'use strict';

const express = require('express');
const app = express();
const join = require('path').join;
const fs = require('fs');
const passport = require('passport');

const PORT = process.env.PORT || 3000;

require('./config/passport')(passport);
require('./config/express')(app, passport);
require('./config/routes')(app, passport);

app.use(express.static(join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded( {extended : false } ));

app.get('/', (req, res)=>{
    res.sendFile(fs.readFileSync('/index.html', 'utf8'));
});

app.post('/create', (req, res)=>{
    //블로그 창설 api
    res.redirect('/');
}); 



app.listen(PORT, ()=>{
    console.log('server is open at ' + PORT);
});