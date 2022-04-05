<?php require_once('conn.php'); ?>

<!DOCTYPE html>
<html lang="zh-Hant-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=1.0, maximum-scale=3.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<form action="add.php" method="post" accept-charset="utf-8" enctype="multipart/form-data">
    <input type="file" name="file_name"><br>
    <button type="submit" name="submit">上傳圖片</button>
</form>
</body>
</html>