
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
document.getElementById("testButton").style.display = "block";
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
    var e = document.getElementById("pop1"); 
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
