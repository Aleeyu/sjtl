<?php

$id = $_REQUEST['id'];
$pic = $_REQUEST['pic'];
$arrpic=explode(",",$pic);
$conn = mysqli_connect('www.wewesupermarket.com','liyu','3741511','liyu',3306);
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "DELETE FROM cases WHERE id=$id";
$result = mysqli_query($conn, $sql);
if($result){
	for ($i=0; $i < count($arrpic); $i++) { 
		unlink($arrpic[$i]);
};
    echo "success";
}else{
    echo "faild";
}
