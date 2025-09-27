//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=99;
var score=0; scoreMax=10; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";var messageNext="";
var timeOnMessage=2; messageOk="¡Correcto!"; messageTime=""; messageError="Corrige errores"; messageErrorG="Corrige errores"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var tiAudio=false;var wordsGame="MzdSSGEtSG9yYS1hbmFsb2dpY2EtMWM="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var d=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];var indexE=0;var indexTXT=0;var rad=200;var c=[55,5,55,50,45,15,10,5,0,55];var a=["Las siete (horas) y cincuenta y cinco (minutos) = Las ocho (horas) menos cinco (minutos) de la mañana","Las ocho (horas) y cinco (minutos) de la mañana","Las ocho (horas) y cincuenta y cinco (minutos) = Las nueve (horas) menos cinco (minutos) de la mañana","Las nueve (horas) y cincuenta (minutos) = Las diez (horas) menos diez (minutos) de la mañana","Las diez (horas) y cuarenta y cinco (minutos) = Las once (horas) menos cuarto de la mañana","Las once (horas) y cuarto = Las once (horas) y quince (minutos) de la mañana","Las doce (horas) y diez (minutos) de la mañana","La una (hora) y cinco (minutos) de la tarde = Las trece (horas) y cinco (minutos)","Las dos (horas) de la tarde = Las catorce (horas)","Las siete (horas) y cincuenta y cinco (minutos) = Las ocho (horas) menos cinco (minutos) de la mañana"];var b=[7,8,8,9,10,11,12,13,14,14];
var canvasRB; var canvasR; var contextRB; var contextR;var canvasDB; var canvasD; var contextDB; var contextD;
var posM=0;var posH=0;var posMD=0;var posHD=0;
var colorM="#000000";var colorH="#FF0000";var rad=200;
var mp3S=["","","","","","","","","",""];var ogg3S=["","","","","","","","","",""];
