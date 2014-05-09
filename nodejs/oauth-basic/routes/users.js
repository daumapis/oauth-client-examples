var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config');

/* GET users listing. */
router.get('/', function(req, res) {
  // Access Token이 없으면 Authorize 시도
  // 여기서는 편의상 session 정보에서 가져오도록 한다. 실제 구현시에는 별도의 DB에서 가져오는게 좋다.
  
  if(!req.session.accessToken) {
    // session 에 accessToken이 없으면 authorize 시도
    // 또는 DB에서 해당 사용자의 access token 정보를 가져와서 시도(그러나 이번 실습에선 복잡해지므로 하지 않음)
  } else {
    // session 에서 accessToken을 가져옴.

    // 회원정보(프로필) API를 호출하여 사용자 정보를 가져온다.
    request.get("https://apis.daum.net/user/v1/show.json", {
      json: true
      // Access Token을 Authorization Header로 넘긴다.
    }, function(err, response, userInfo) {
        // 이 시점에 해당 access token과 엮어서 user의 정보를 DB에 저장해둔다.
        // 사용자 정보를 렌더링
    });  
  }
});

module.exports = router;
