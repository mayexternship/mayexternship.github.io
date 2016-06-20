
function functionStart(id)
{
 	document.getElementById("smallscreen").style.backgroundImage = "url('scenetest.png')";
document.getElementById("glassesButton").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
    var e = document.getElementById("instructions"); 
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
var e = document.getElementById("entername"); 
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
$('#scenario1').show(); return false;
}

function functionGlasses(id)
{
document.getElementById("choiceA").style.display = "block";
document.getElementById("choiceB").style.display = "block";
document.getElementById("choiceC").style.display = "block";
document.getElementById("choiceD").style.display = "block";

document.getElementById("answer2").style.display = "block";


 document.getElementById("smallscreen").style.backgroundImage = "url('test.png')";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
var e = document.getElementById("scenario1"); 
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";

$('#answer1').show(); return false;
var e = document.getElementById("glassesButton"); 
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
}

function funcWAns(id){
document.getElementById("incorrectAns").style.display = "block";

var e = document.getElementById("answer2"); 
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
var e = document.getElementById("answer1"); 
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
}
function funcCAns(id){
document.getElementById("correctAns").style.display = "block";

var e = document.getElementById("answer2"); 
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
var e = document.getElementById("answer1"); 
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
}

