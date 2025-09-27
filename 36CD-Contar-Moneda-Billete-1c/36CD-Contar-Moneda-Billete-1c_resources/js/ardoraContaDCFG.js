//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=19; attempts=0; attemptsMax=99;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
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
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="¡Correcto!"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MzZDRC1Db250YXItTW9uZWRhLUJpbGxldGUtMWM="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var m=["c001","c002","c005","c010","c020","c050","c100","c200","cB5","cB10","cB20","cB50","cB100"];
var values=[10,20,50,100,200,500,1000,2000,5000,10000,20000,50000,100000];
var tiC=[5,5,5,5,5,5,5,5,5,4,3,3,1];
var imaH=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var totEuros=0;var totCent=0;var nameEuro="€";var nameCent="Cént.";
var te=["Un euro con cuarenta y cinco céntimos","Diez euros con setenta y cindo céntimos","Doce euros con noventa y cinco céntimos","Cinco euros y cincuenta y seis céntimos","Once euros y cuarenta y un céntimos","","","","","","","","","","","","","",""];var im=["","","","","","","","","","","","","","","","","","",""];var a1=["","","","","","","","","","","","","","","","","","",""];var imalt=["","","","","","","","","","","","","","","","","","",""];
var indexGame=0;var totCentFixed=0; var totEurosFixed=0; var avaiCoins=[];var correct=[];
var ce=[470,750,950,560,410,180,730,630,860,480,60,990,990,950,880,610,930,830,210];var eu=[1000,10000,12000,5000,11000,44000,83000,47000,146000,78000,102000,101000,99000,99000,49000,26000,48000,126000,32000];var ram_G=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
