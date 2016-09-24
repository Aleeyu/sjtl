<?php 
header('content-type:text/html;charset=utf-8');
$username = $_REQUEST['username'];
$phone = $_REQUEST['phone'];
$timee = $_REQUEST['timee'];
$message = $_REQUEST['message'];
$conn = mysqli_connect('www.wewesupermarket.com','liyu','3741511','liyu',3306);
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "INSERT INTO message VALUES(NULL,'$username','$phone','$message','$timee')";
$result = mysqli_query($conn, $sql);
if($result){
    echo 'success';
}else{
    echo 'faild';
}