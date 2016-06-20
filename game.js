
function functionStart(id)
{
 	document.getElementById("smallscreen").style.backgroundImage = "url('scenetest.png')";
document.getElementById("glassesButton").style.display = "block";
 document.getElementById("pop1").style.display = "block";
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
var v = document.getElementById("pop1"); 
    if(v.style.display == "none")
    v.style.display = "block";
  else
    v.style.display = "none";
$('#answer1').show(); return false;
$('#answer2').show(); return false;

var e = document.getElementById("glassesButton"); 
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
}



function functionCAns(id)
{
 document.getElementById("smallscreen").style.backgroundImage = "url('plaid.png')";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
var v = document.getElementById("choiceA"); 
    if(v.style.display == "none")
    v.style.display = "block";
  else
    v.style.display = "none";
var v = document.getElementById("choiceB"); 
    if(v.style.display == "none")
    v.style.display = "block";
  else
    v.style.display = "none";
var v = document.getElementById("choiceC"); 
    if(v.style.display == "none")
    v.style.display = "block";
  else
    v.style.display = "none";
var v = document.getElementById("choiceD"); 
    if(v.style.display == "none")
    v.style.display = "block";
  else
    v.style.display = "none";
var v = document.getElementById("answer1"); 
    if(v.style.display == "none")
    v.style.display = "block";
  else
    v.style.display = "none";
var v = document.getElementById("answer2"); 
    if(v.style.display == "none")
    v.style.display = "block";
  else
    v.style.display = "none";
$('incorrectAns').show(); return false;

}

function functionWAns(id)
{
 document.getElementById("smallscreen").style.backgroundImage = "url('plaid.png')";

var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
var v = document.getElementById("choiceA"); 
    if(v.style.display == "none")
    v.style.display = "block";
  else
    v.style.display = "none";
var v = document.getElementById("choiceB"); 
    if(v.style.display == "none")
    v.style.display = "block";
  else
    v.style.display = "none";
var v = document.getElementById("choiceC"); 
    if(v.style.display == "none")
    v.style.display = "block";
  else
    v.style.display = "none";
var v = document.getElementById("choiceD"); 
    if(v.style.display == "none")
    v.style.display = "block";
  else
    v.style.display = "none";
var v = document.getElementById("answer1"); 
    if(v.style.display == "none")
    v.style.display = "block";
  else
    v.style.display = "none";
var v = document.getElementById("answer2"); 
    if(v.style.display == "none")
    v.style.display = "block";
  else
    v.style.display = "none";
$('#correctAns').show(); return false;

}
