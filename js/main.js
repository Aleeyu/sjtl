////////////////////////////banner轮播图//////////////////
$(function(){
	var i=0;
	var clone=$(".banner .img li").first().clone();
	$(".banner .img").append(clone);	
	var size=$(".banner .img li").size();	
	for(var j=0;j<size-1;j++){
		$(".banner .num").append("<li></li>");
	}
	$(".banner .num li").first().addClass("on");
	/*鼠标划入圆点*/
	$(".banner .num li").hover(function(){
		var index=$(this).index();
		i=index;
		$(".banner .img").stop().animate({left:-index*1900},500)	
		$(this).addClass("on").siblings().removeClass("on")		
	})
	/*自动轮播*/
	var t=setInterval(function(){
		i++;
		move()
	},2000)
	/*对banner定时器的操作*/
	$(".banner").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(function(){
			i++;
			move()
		},2000)
	})
	/*向左的按钮*/
	$(".banner .btn_l").click(function(){
		i++
		move();	
	})
	/*向右的按钮*/
	$(".banner .btn_r").click(function(){
		i--
		move()				
	})
	
	function move(){
		if(i==size){
			$(".banner  .img").css({left:0})			
			i=1;
		}
		if(i==-1){
			$(".banner .img").css({left:-(size-1)*1900})
			i=size-2;
		}
		$(".banner .img").stop().animate({left:-i*1900},500)
		if(i==size-1){
			$(".banner .num li").eq(0).addClass("on").siblings().removeClass("on")	
		}else{		
			$(".banner .num li").eq(i).addClass("on").siblings().removeClass("on")	
		}
	}
	
});
GETCASE("nq");
GETCASE("kt");
GETCASE("js");
function GETCASE(leii){
    $.post('php/anlist.php',{lei:leii},function(data) {
     var datali=$.parseJSON(data);
     for (var i = 0;i<3;i++) {
         var img=datali[i].img.split(",")[0].slice(3);
         var cas=`<div class="item lf itemss">
      <div><img src=${img} alt=""><span><a href="html/casemore.html#${datali[i].id}"><img src="images/search.png" alt=""></a></span></div>
      <h3>${datali[i].title}</h3>
      <em></em>
      <p>${datali[i].msg.slice(0, 30)}<br>${datali[i].msg.slice(30,50)}......</p>
    </div>`
    $(".case-box").append(cas);
     }
 });
};
 $.post('php/selnews.php', function(data) {
 	var datalist=$.parseJSON(data);
 	for (var i = 0;i<3;i++) {
 		var inew=`<div class="newit cl">
      <div class="new-list">
        <span>${datalist[i].timee}</span>
        <p>${datalist[i].msg.slice(0,40)}......</p>
        <em></em>
      </div>
    </div>`
    $(".newbox").append(inew);
 	}
 });