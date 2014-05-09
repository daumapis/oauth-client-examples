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
  // 쿠키에서 Access Token을 가져옴
  if(accessToken) {
    // 엑세스 토큰이 쿠키에 있으면 그대로 반환
  } else if(window.location.hash) {
    // fragment 가 있으면 access_token, expires_in 값 추출
    // accessToken을 expires_in 기간 후 만료되도록 쿠키 저장하여 반환 
    
    // 뭔가 문제가 있으면 그냥 null 반환
    return null;
  }  else {
    return null;
  }
}
