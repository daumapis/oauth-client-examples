<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page session="true" %>
<%
String accessToken = (String) session.getAttribute("accessToken");

if(accessToken == null) {
	response.sendRedirect("https://apis.daum.net/oauth2/authorize?client_id=1234567890&response_type=code&redirect_uri=http://localhost:8080/oauth2-exam/oauthCallback");
}
%>
<html>
<head>
	<title>Home</title>
</head>
<body>
<h1>
accessToken = ${accessToken}!
</h1>
</body>
</html>
