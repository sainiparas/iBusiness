function abc()
{
	var ab = new Date();
	var cd = ab.toLocaleDateString();
	document.getElementById("btn1").innerHTML =cd;
	var k = window.setInterval(def,1000);
	
}


function def()
{
	var a = new Date();
	var b = a.toLocaleTimeString();
	document.getElementById("btn2").innerHTML = b;

}


function markUp()
{
    document.getElementsByClassName("txt-area").css("fontWeight","bold");
}
