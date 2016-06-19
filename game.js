
function functionStart(id)
{
 	document.getElementById("smallscreen").style.backgroundImage = "url('scenetest.png')";
document.getElementById("testButton").style.display = "block";
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

function function2(id)
{
 	document.getElementById("smallscreen").style.backgroundImage = "url('test.png')";
document.getElementById("nextButton").style.display = "block"; //show next
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
}
