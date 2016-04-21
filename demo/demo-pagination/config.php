<?php
header("ContentType:text/html; charset=utf8");

error_reporting(E_ALL);
$conn = mysqli_connect("127.0.0.1", "root", "") or die('数据库连接失败：'.mysqli_connect_error($conn));

mysqli_select_db($conn, "test") or die('数据库错误：'.mysqli_error($conn));

mysqli_query($conn, 'SET NAMES UTF8') or die('字符集错误: '.mysqli_error($conn));

?>