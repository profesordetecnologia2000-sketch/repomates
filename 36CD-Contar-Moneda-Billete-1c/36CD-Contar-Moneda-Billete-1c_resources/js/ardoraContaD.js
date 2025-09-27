//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();}
loadMoney();
$("#buttonOk").attr("tabindex","0");$("#buttonOk").keydown(function(e){if (e.which!=9){isCorrect();}});$("#buttonOk").focus(function(e){removeOk();});$("#buttonOk").blur(function(e){paintOk();});
}
function loadMoney(){
totCentFixed = ce[ram_G[indexGame]];totEurosFixed = eu[ram_G[indexGame]];
$(".coin").each(function() {this.remove();});var tot=totEurosFixed+totCentFixed;var avMoney=tiC.slice();var totPaint=0;var newCoins=[];
for (i = values.length-1; i>-1; i--) {while (avMoney[i]>0 && values[i]+totPaint<=tot){var altValue=(values[i]/1000).toFixed(3);if (altValue.substr(-1)=="0") {altValue=altValue.substring(0,altValue.length-1)}
if (altValue.substr(-3)==",00" || altValue.substr(-3)==".00") {altValue=altValue.substring(0,altValue.length-3)}
altValue=altValue+"€";
var newCoin= $('<img alt="'+altValue+'" class="coin" src="36CD-Contar-Moneda-Billete-1c_resources/media/'+m[i].substr(1)+'.gif"/>');newCoins.push(newCoin);totPaint=totPaint+values[i];avMoney[i]--;}}
for (i=0; i<newCoins.length;i++){$("#drop").append(newCoins[i]);} paintScore();
var newHtml="";if ($.trim(im[ram_G[indexGame]])){newHtml='<img id="imaL" class="imaLeft" alt="'+imalt[ram_G[indexGame]]+'" src="36CD-Contar-Moneda-Billete-1c_resources/media/'+im[ram_G[indexGame]]+'">';}
newHtml=newHtml+te[ram_G[indexGame]];$("#actText").html(newHtml);
$("#imaL").attr("tabindex","0");if ($.trim(im[ram_G[indexGame]])) {$( "#imaL" ).css("cursor","pointer");$( "#imaL" ).click(function() {imaUp("36CD-Contar-Moneda-Billete-1c_resources/media/G" + im[ram_G[indexGame]],imalt[ram_G[indexGame]])});
$("#imaL").keydown(function(e){if (e.which!=9){ imaUp("36CD-Contar-Moneda-Billete-1c_resources/media/G" + im[ram_G[indexGame]],imalt[ram_G[indexGame]])}});
}
$("#actText").css("minHeight",imaH[ram_G[indexGame]]);$(".buttonAu").remove();
if ($.trim(a1[ram_G[indexGame]])){$("#auDiv").append('<img alt="Play" class="buttonAu" src="36CD-Contar-Moneda-Billete-1c_resources/media/sound.png"/>');
$("audio").each(function(){this.pause();});document.getElementById(a1[ram_G[indexGame]]).play();$(".buttonAu").click(function(){document.getElementById(a1[ram_G[indexGame]]).play();});
$(".buttonAu").attr("tabindex","0");$(".buttonAu").keydown(function(e) {if (e.which!=9){document.getElementById(a1[ram_G[indexGame]]).play();}});
}
}
function imaUp(ima,alt) {$("#ardoraActCanvas").attr("role","img");$("#ardoraActCanvas").attr("aria-label",alt);$("body").css("overflow", "hidden");var aW=$("#ardoraActCanvas").attr("width");var aH=$("#ardoraActCanvas").attr("height");$("#ardoraActCanvas").attr({"width": $(window).width(),"height": $(window).height()});document.getElementById("ardoraActCanvas").style.zIndex = 5;
document.getElementById("ardoraActCanvas").style["visibility"] = "visible";var alpha=0;var delta=0.03;var canvas = document.getElementById("ardoraActCanvas");var context = canvas.getContext("2d");context.beginPath();
context.fillStyle = "rgba(0, 0, 0, 0.25)";context.fillRect(0, 0, context.canvas.width, context.canvas.height);context.fill();var imageObj=new Image();
imageObj.onload = function() {var xCenterIma=($("#ardoraActCanvas").width()-imageObj.width)/2;var yCenterIma=($("#ardoraActCanvas").height()-imageObj.height)/2;context.beginPath();
context.shadowColor = "rgba(0,0,0,0.25)";context.shadowBlur=10;context.shadowOffsetX=10;context.shadowOffsetY=10;context.fill();context.beginPath();context.strokeStyle = "rgba(0,0,0,1)";
context.fillStyle = "rgba(255,255,255,1)";context.fillRect(xCenterIma-5,yCenterIma-5,imageObj.width+10,imageObj.height+10);context.fill();context.rect(xCenterIma-5,yCenterIma-5,imageObj.width+10,imageObj.height+10);
context.stroke();context.fill();context.shadowBlur=0;context.shadowOffsetX=0;context.shadowOffsetY=0;loop();
function loop() {alpha += delta;if (alpha <= 1) {context.clearRect(xCenterIma, yCenterIma, imageObj.width, imageObj.height);context.globalAlpha=alpha;context.drawImage(imageObj, xCenterIma, yCenterIma);requestAnimationFrame(loop);}}};
imageObj.src=ima;$("#ardoraActCanvas").css("cursor","pointer");$("#ardoraActCanvas").click(function() {document.getElementById("ardoraActCanvas").style.zIndex=0;document.getElementById("ardoraActCanvas").style["visibility"]="hidden";
canvas.width=canvas.width;$("body").css("overflow", "visible");$("#ardoraActCanvas").attr({"width":aW,"height":aH});$("#ardoraActCanvas").attr("aria-label","");});
$("#ardoraActCanvas").attr("tabindex","0");$("#ardoraActCanvas").focus();$("#ardoraActCanvas").keydown(function(e){$("#ardoraActCanvas").trigger("click");});}
window.requestAnimationFrame=(function() {return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {window.setTimeout(callback, 10000 / 60);};})();
function paintScore(){
$("#score").animate({marginTop:"200px"})
$("#scoreC").animate({marginTop:"200px"})
$("#scoreU").animate({marginTop:"200px"})
$("#score").html('<input type="text" id="inTotalEuros" name="inTotalEuros" placeholder="0,0">'+nameEuro);
$("#scoreC").html('<input type="text" id="inCent" name="inCent" placeholder="0">'+nameCent);
$("#scoreU").html('<input type="text" id="inEuros" name="inEuros" placeholder="0">'+nameEuro);
$("input").keyup(function(){var val = $(this).val();if(isNaN(val)){
val = val.replace(/[^0-9\,]/g,"");if(val.split(",").length>2) val =val.replace(/\,+$/,"");
}$(this).val(val);});
$("#score").animate({marginTop:"-10px"})
$("#scoreC").animate({marginTop:"-10px"})
$("#scoreU").animate({marginTop:"-10px"})
}
function randomSort(){
for (i=0;i<ram_G.length;i++){var ind=Math.floor(Math.random()*ram_G.length);while (ram_G[ind]>-1) {ind++;if (ind>=ram_G.length){ind=0;}}ram_G[ind]=i;}
}
function isCorrect(){
var isCorrect = false;
var reply=$("#inTotalEuros").val().replace(",",".").split(".");totEuros=parseInt(reply[0])*1000;totCent=0;
if (reply.length>1){if (reply[1].length==1){totCent=parseInt(reply[1])*100;}else{totCent=parseInt(reply[1])*10;}}
var tEur=0; var tCen=0;if ($("#inEuros").val().length>0){tEur=parseInt($("#inEuros").val())*1000;}
if ($("#inCent").val().length>0){tCen=parseInt($("#inCent").val())*10;}
if ((totCentFixed == totCent) && (totEurosFixed == totEuros) && (totCentFixed == tCen) && (totEurosFixed == tEur)) {isCorrect = true}
if (isCorrect) {totEuros=0;totCent=0;score=score+scoreInc;timeAct=timeAct+timeBon;successes++;indexGame++;if (indexGame >= ram_G.length) {$("#ardoraActCanvas").attr("aria-label",messageOk); showMessage("Ok");$("#buttonOk").remove();} else {loadMoney();}}
else{attempts++;score=score-scoreDec;if (tiAttempts) {if (attempts > attemptsMax) {$("#ardoraActCanvas").attr("aria-label",messageAttempts);showMessage("Attempts");} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
}
function paintBack(){}
function ContaDWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
