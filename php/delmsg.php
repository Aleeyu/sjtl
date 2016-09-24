<?php
$id = $_REQUEST['id'];
$conn = mysqli_connect('www.wewesupermarket.com','liyu','3741511','liyu',3306);
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "DELETE FROM message WHERE id=$id";
$result = mysqli_query($conn, $sql);
if($result){
    echo "success";
}else{
    echo "faild";
}