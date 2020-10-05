document.body.addEventListener("click", function(e){
	s = window.getSelection();
	var range = s.getRangeAt(0);
	var node = s.anchorNode;
	while(range.toString().indexOf(' ') != 0) {                 
		range.setStart(node,(range.startOffset -1));
	}
	range.setStart(node, range.startOffset +1);
	do{
		range.setEnd(node,range.endOffset + 1);

	}while(range.toString().indexOf(' ') == -1 && range.toString().trim() != '');
	var str = range.toString().trim();
	myFunction(str, e.x, e.y);

});
function myFunction(text, x, y) {
	chrome.runtime.sendMessage(text, (response) => {
		coordinates(response.message, x, y);
	});
}
function coordinates(content, x, y){
	if(x < screen.width - 200 && y < screen.width - 240)
	{
		createHTML(content, x, y)
	}
	if(x > screen.width - 200 && y < screen.width - 240)
	{
		x = x - 200;
		createHTML(content, x, y)
	}


	if(x < screen.width - 200 && y > screen.height - 340)
	{
		y = y - 240;
		createHTML(content, x, y)
	}
	if(x > screen.width - 200 && y > screen.height - 340)
	{
		x = x - 200;
		y = y - 240;
		createHTML(content, x, y)
	}
}
function createHTML(content, x, y){
	var div1 = document.createElement("DIV");
	div1.setAttribute("id", "popup");
	var div2 = document.createElement("DIV");
	div2.setAttribute("id", "div2");
	var p1 = document.createElement("p");
	p1.setAttribute("id", "p1");
	var p2 = document.createElement("p");
	p2.setAttribute("id", "p2");




	div2.appendChild(p1);
	div2.appendChild(p2);
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
	/*style div2*/
	document.getElementById("div2").style.width = "100%";
	document.getElementById("div2").style.height = "20px";
	document.getElementById("div2").style.backgroundColor  = "#3498db";
	document.getElementById("div2").style.borderRadius = "5px 5px 0px 0px";
	document.getElementById("div2").style.position = "absolute";
	/*style p1*/
	document.getElementById("p1").innerHTML = "DSEnglist";
	document.getElementById("p1").style.fontWeight = "bold";
	document.getElementById("p1").style.textAlign = "center";
	document.getElementById("p1").style.color = "white";
	document.getElementById("p1").style.marginTop = "auto";
	/*style p1*/
	document.getElementById('p2').innerHTML = content + " " + x + " " + y;
}
/*
function myFunction(text) {
	let t;
	fetch("https://dict.laban.vn/find?type=1&query=" + text, { mode: 'no-cors'})
	.then((data) =>{
		data.text().then((textt) => {
			console.log(textt);
			t = new DOMParser().parseFromString(textt, "text/html");
			let a = t.getElementById("content_selectable")
			let b = t.getElementsByClassName("green")
			console.log(b[0]);
		});
		console.log(doc);
	})
	.catch((error) =>{
    // If there is any error you will catch them here
});
}*/




//get message
/*chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendResponse){
	console.log(message.txt);
}
*/



//sendMessage
/*chrome.runtime.sendMessage('Hello word');*/
