var sub=document.querySelector(".Submit")
var detail_1=document.querySelector(".detail-1")
var detail_2=document.querySelector(".detail-2")
var detail_3=document.querySelector(".detail-3")
sub.addEventListener("click",function(){
    detail_1.value=detail_2.value=detail_3.value=""
})