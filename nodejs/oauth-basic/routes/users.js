var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config');

/* GET users listing. */
router.get('/', function(req, res) {
  // Access Token이 없으면 Authorize 시도
  // 여기서는 편의상 session 정보에서 가져오도록 했지만, 실제 구현시에는 별도의 DB에서 가져오는게 좋다.
  if(!req.session.accessToken) {
    res.redirect("https://apis.daum.net/oauth2/authorize?response_type=code&client_id=" + config.clientId + "&redirect_uri=" + config.oauthCallback);
  } else {
    var accessToken = req.session.accessToken.access_token;

    // 사용자 정보를 가져온다.
    request.get("https://apis.daum.net/user/v1/show.json", {
      json: true,
      headers: {
        "Authorization": "Bearer " + accessToken
      }
    }, function(err, response, userInfo) {
      if(userInfo.errorType) {
        res.redirect("https://apis.daum.net/oauth2/authorize?response_type=code&client_id=" + config.clientId + "&redirect_uri=" + config.oauthCallback);    
      } else {
        // 이 시점에 user의 정보를 DB에 저장해둔다.
        res.render('user', {"userInfo": userInfo.result});
      }
    });  
  }
});

module.exports = router;
