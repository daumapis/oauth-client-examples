function setCookie(cName, cValue, expires){
  var expireTime = new Date((new Date()).getTime() + expires);
  console.log(expireTime);
  cookies = cName + '=' + escape(cValue) + '; path=/ ';
  if(typeof expireTime != 'undefined') cookies += ';expires=' + expireTime.toGMTString() + ';';
  document.cookie = cookies;
}

function getCookie(cName) {
  cName = cName + '=';
  var cookieData = document.cookie;
  var start = cookieData.indexOf(cName);
  var cValue = '';
  if(start != -1){
       start += cName.length;
       var end = cookieData.indexOf(';', start);
       if(end == -1)end = cookieData.length;
       cValue = cookieData.substring(start, end);
  }
  return unescape(cValue);
}

function _postbodyToArray(postbody) {
    var arr = postbody.split("&");

    var values, form_data = {}; 

    var form_data = {}; 

    for( var i = 0; i < arr.length; i++) {
        values = arr[i].split("=");
        form_data[values[0]] = values[1];
    }   
    return form_data;
};

function authorize() {
  var accessToken = getCookie("accessToken");
  if(accessToken) {
    return accessToken;
  } else if(window.location.hash) {
    var h = _postbodyToArray(window.location.hash.substring(1));
    if(h["access_token"]) {
      setCookie("accessToken", h["access_token"], parseInt(h["expires_in"]) * 1000);
      return h["access_token"];
    }
    return null;
  }  else {
    return null;
  }
}
