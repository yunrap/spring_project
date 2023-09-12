<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="robots" content="noindex, nofollow">
    <title>spring project</title>
    <link rel="stylesheet" type="text/css" href="/style/css/common.css">
    <script type="text/javascript" src="/js/jquery-3.7.1.min.js"  /></script>
</head>
<body style="min-width: 1280px;">
    <div class="wrapper">
        <header>
            <tiles:insertAttribute name="header" />
        </header>
        <section>
            <tiles:insertAttribute name="body"/>
        </section>
        <footer>
            <span>Copyright © 2023 yunyeji. All rights reserved.</span>
        </footer>
    </div>
</body>
</html>