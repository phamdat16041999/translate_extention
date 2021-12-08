document.body.addEventListener("click", function(e){
	s = window.getSelection().toString();
	/*Chuyen chu hoa thanh chu thuong*/
	s = s.toLowerCase();
	if(s != "")
	{
		myFunction(s, e.x, e.y);
	}
	if(s == "")
	{

		blockContent()
	}
});
function myFunction(text, x, y) {
	chrome.runtime.sendMessage(text, (response) => {
		coordinates(response.message, x, y);
		/*console.log(response.message, x, y);*/
	});
}
function coordinates(content, x, y){
	if(x < screen.width - 200 && y < screen.height - 240)
	{
		createHTML(content, x, y)
		console.log("a");
	}
	if(x > screen.width - 200 && y < screen.height - 240)
	{
		x = x - 200;
		createHTML(content, x, y)
		console.log("b");
	}


	if(x < screen.width - 200 && y > screen.height - 340)
	{
		y = y - 240;
		createHTML(content, x, y)
		console.log("c");
	}
	if(x > screen.width - 200 && y > screen.height - 340)
	{
		x = x - 200;
		y = y - 240;
		createHTML(content, x, y)
		console.log("d");

	}
}
function createHTML(content, x, y){
	var div1 = document.createElement("DIV");
	div1.setAttribute("id", "popup");
	var div2 = document.createElement("DIV");
	div2.setAttribute("id", "div2");
	var p1 = document.createElement("p");
	p1.setAttribute("id", "p1");
	var vocabulary = document.createElement("p");
	vocabulary.setAttribute("id", "vocabulary");
	vocabulary.setAttribute("style", "font-size: 24px;margin-left: 10px;");
	var pronounce = document.createElement("p");
	pronounce.setAttribute("id", "pronounce");
	pronounce.setAttribute("style", "font-size: large;margin-left: 10px;");

	var p2 = document.createElement("p");
	p2.setAttribute("id", "p2");
	var form = document.createElement("form");
	form.setAttribute("id", "form");
	var input = document.createElement("input");
	input.setAttribute("id", "input");
	var div_button = document.createElement("div");
	div_button.setAttribute("style", "text-align: center; width: 100%;");
	var input1 = document.createElement("input");
	input1.setAttribute("id", "input1");
	input1.setAttribute("style", "background-color: rgb(52, 152, 219); border-radius: 5px; border: solid rgb(52, 152, 219); color:white; font-weight: bold; margin-top: 15px;");



	form.appendChild(input);
	form.appendChild(div_button);
	div_button.appendChild(input1);

	div2.appendChild(p1);
	div2.appendChild(vocabulary);
	div2.appendChild(pronounce);
	div2.appendChild(p2);
	div2.appendChild(form);
	div1.appendChild(div2);
	document.body.appendChild(div1);
	/*style div1*/
	document.getElementById("popup").style.width = "200px";
	document.getElementById("popup").style.height = "240px";
	document.getElementById("popup").style.backgroundColor  = "#ecf0f1";
	document.getElementById("popup").style.position = "fixed";
	document.getElementById("popup").style.borderRadius = "5px";
	document.getElementById('popup').style.top = y + "px";
	document.getElementById('popup').style.left = x + "px";
	document.getElementById("popup").style.zIndex = "1000";
	console.log(x, y);
	/*style div2*/
	document.getElementById("div2").style.width = "100%";
	document.getElementById("div2").style.height = "28px";
	document.getElementById("div2").style.backgroundColor  = "#3498db";
	document.getElementById("div2").style.borderRadius = "5px 5px 0px 0px";
	document.getElementById("div2").style.position = "absolute";
	/*style p1*/
	document.getElementById("p1").innerHTML = "DSEnglist";
	document.getElementById("p1").style.fontWeight = "bold";
	document.getElementById("p1").style.textAlign = "center";
	document.getElementById("p1").style.color = "white";
	document.getElementById("p1").style.marginTop = "auto";
	/*vocabulary title*/
	document.getElementById("vocabulary").innerHTML = content[0].toUpperCase();
	document.getElementById("vocabulary").style = "line-height: normal;"
	/*	pronounce*/
	document.getElementById("pronounce").innerHTML = "/" + content[2] + "/";
	/*style p2*/
	document.getElementById('p2').innerHTML = "Từ thông dụng nhất:";
	document.getElementById("p2").style.fontWeight = "bold";
	/*style input*/
	document.getElementById("input").value = content[1];
	document.getElementById("input").style.width = "100%";
	document.getElementById("input").style.borderRadius = "3px";
	/*style input1*/
	document.getElementById("input1").value = "Add new words";
	document.getElementById("input1").type = "submit";
	/*style form*/
	document.getElementById("form").target = "_blank";
	document.getElementById("form").action = "https://dsenglish.herokuapp.com/user/addVocabularyExtention/"+content[0].toUpperCase()+"/"+content[1]+"";
}
function blockContent()
{

	var myobj = document.getElementById("popup");
	if(myobj != null){
		myobj.remove();
	}
}
/*bat dau tao input*/