<?php
sleep(1);
require "config.php";

$page = $_GET['page'];
$pageSize = $_GET['pagesize'];
$first = $pageSize * ($page - 1);

$query = mysqli_query($conn, "SELECT * FROM TB_USER LIMIT $first,$pageSize")
	or die('查询错误: '.mysqli_error($conn));

while($row = mysqli_fetch_array($query, MYSQLI_ASSOC)) {
	echo "<ul>";
	echo "<li>".$row['ID'].' --- '.$row['NAME'].'</li>';
	echo "</ul>";
}

mysqli_close($conn);
?>