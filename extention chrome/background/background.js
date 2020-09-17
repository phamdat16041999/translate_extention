//send message
/*console.log("background is runing");
chrome.browserAction.onClicked.addListener(buttonClick);
function buttonClick(tab){
	let msg = {
		txt: "Hello"
	}
	chrome.tabs.sendMessage(tab.id, msg);
}
*/

chrome.runtime.onMessage.addListener(function(response, sender, sendResponse)
{
	translate(response);
});
function translate(response){
	let t;
	fetch("https://dict.laban.vn/find?type=1&query=" + response, { mode: 'no-cors'})
	.then((data) =>{
		data.text().then((textt) => {
			t = new DOMParser().parseFromString(textt, "text/html");
			let a = t.getElementById("content_selectable")
			let b = t.getElementsByClassName("green")
			console.log(b[0].innerText);
		});
	})
	.catch((error) =>{
    // If there is any error you will catch them here
});
}