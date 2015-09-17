/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var i = 0;
var slideNumber = 7;
var intervalId;
$(document).ready(function () {
   intervalId=window.setInterval(caroussel,3000);
   $("#slideContainer").mouseover(function(){
        window.clearInterval(intervalId);
   });
   $("#slideContainer").mouseout(function(){
       intervalId=window.setInterval(caroussel,3000);
   });
   alert("si jala");
});
function caroussel() {
    var currentActive = $("#slide" + (i % slideNumber));
    var nextImg = $("#slide" + ((i + 1) % slideNumber));
    
    currentActive.slideToggle();
    nextImg.slideToggle();
    i++;
}

