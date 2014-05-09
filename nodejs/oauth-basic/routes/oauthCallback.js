var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config');

/* GET users listing. */
router.get('/', function(req, res) {
  var params = {
    grant_type: "authorization_code",
    code: req.query.code,
    client_id: config.clientId,
    client_secret: config.clientSecret,
    redirect_uri: config.oauthCallback
  }
  request({
    method: "POST",
    url: "https://apis.daum.net/oauth2/token",
    form: params
  }, function(err, response, body) {
    var accessToken = JSON.parse(body);
    req.session.accessToken = accessToken;
    req.session.cookie.expires = accessToken.expires_in * 1000;

    // 이 시점에 DB에 access token 정보를 저장해둔다.
    
    res.redirect('/users');
  });
});

module.exports = router;
