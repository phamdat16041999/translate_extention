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
	myFunction(str);

});
function myFunction(text) {
	chrome.runtime.sendMessage(text);
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
