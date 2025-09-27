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
var tiAudio=false;var wordsGame="MzdSSGQtSG9yYS1kaWdpdGFsLTAtMTJoLTFj"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var d=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];var indexE=0;var indexTXT=0;var rad=200;var c=[55,5,55,50,45,15,10,30,5,15];var a=["Las siete y cincuenta y cinco AM","Las diez y cinco AM","Las once y cincuenta y cinco AM","La una y cincuenta PM","Las tres y cuarenta y cinco PM","Las siete y quince PM","Las diez y diez PM","Las once y treinta PM","La una y cinco AM","Las siete y cincuenta y cinco AM"];var b=[7,10,11,13,15,19,22,23,1,3];
var canvasRB; var canvasR; var contextRB; var contextR;var canvasDB; var canvasD; var contextDB; var contextD;
var posM=0;var posH=0;var posMD=0;var posHD=0;
var colorM="#000000";var colorH="#FF0000";var rad=200;
var mp3S=["","","","","","","","","",""];var ogg3S=["","","","","","","","","",""];
