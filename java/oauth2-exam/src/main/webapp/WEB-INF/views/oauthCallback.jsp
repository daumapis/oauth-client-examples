<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page session="true" %>
<%

String accessToken = (String) request.getAttribute("accessToken");
Integer expiresIn = (Integer) request.getAttribute("expiresIn");

session.setAttribute("accessToken", accessToken);
session.setMaxInactiveInterval(expiresIn);


// Mobile 앱인경우 daum-{client_id}://oauth/callback#access_token=abcd1234&expires_in=3600 으로 redirect 하는 방법을 취함
response.sendRedirect("http://tadoli.net/oauthCallback?access_token=" + accessToken + "&expires_in=" + expiresIn);

%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>
</head>
<body>
${accessToken}
</body>
</html>