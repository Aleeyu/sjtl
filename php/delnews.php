<?php
$id = $_REQUEST['id'];
$pic = $_REQUEST['img'];
$conn = mysqli_connect('www.wewesupermarket.com','liyu','3741511','liyu',3306);
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "DELETE FROM news WHERE id=$id";
$result = mysqli_query($conn, $sql);
if($result){
	unlink($pic);
    echo "success";
}else{
    echo "faild";
}
