<?php
date_default_timezone_set('Europe/Moscow');
    $host = "localhost";
    $username = "denikder";
    $password = "33028yyGG";
    $database = "english";
    $conn = mysqli_connect($host, $username, $password, $database);
    $rowprices = mysqli_query($conn, "SELECT `price` from `promo_prices` WHERE `order` = `order`");
    foreach ($rowprices as $price) {
        $rowprice .= $price['price'] . "ㅤ";
    }
    
    echo $rowprice;
    if (isset($_POST['name']) && isset($_POST['phone']) && isset($_POST['email'])) {
        $date = date('Y/d/m h:i:s a', time());
        mysqli_query($conn, "INSERT INTO `applications` (timestamp, name, phone, email) VALUES ('$date','$_POST[name]', '$_POST[phone]', '$_POST[email]')");
    }
?>