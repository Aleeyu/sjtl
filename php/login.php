<?php
    $loginname = $_POST['user'];
    $loginpwd = $_POST['pwd'];
$conn = mysqli_connect('www.wewesupermarket.com','liyu','3741511','liyu',3306);
    $sql = "SET NAMES UTF8";
    mysqli_query($conn,$sql);
    $sql = "SELECT * FROM user WHERE name='$loginname' AND pwd='$loginpwd'";
    $result = mysqli_query($conn,$sql);
    $row = mysqli_fetch_assoc($result);
    if($row===NULL){
        $row["code"] = 0;//登录失败
    }else{
        $row["code"] = 1;//登录成功
    }
    echo json_encode($row);
?>