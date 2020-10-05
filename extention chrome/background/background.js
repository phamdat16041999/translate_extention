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
		
	/*sendResponse({message: translate(response)});*/
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    (async () => {
      const payload = await translate(request);
      console.log("thumbPayload after function:", payload)
      sendResponse({message: payload})
    })();
    return true; // keep the messaging channel open for sendResponse
});
async function translate(response){
	let data = await fetch("https://dict.laban.vn/find?type=1&query=" + response, { mode: 'no-cors'})
	.then((response) => response.text())
	.then(data => {
		return data;
	})
	.catch(error => {
		console.error(error);
	});
/*	let data1 = await data.text().then((textt) => {
		return(textt);
	});*/
	let t = new DOMParser().parseFromString(data, "text/html");
	let a = t.getElementById("content_selectable")
	let b = t.getElementsByClassName("green")
	let content = b[0].innerText;
	console.log(content);
	return content;
	
}




/*let data = await fetch("https://dict.laban.vn/find?type=1&query=" + response, { mode: 'no-cors'})
.then((response) => response.blob())
.then(data => {
	return data;
})
.catch(error => {
	console.error(error);
});

console.log(data);


{
		data.text().then((textt) => {
			t = new DOMParser().parseFromString(textt, "text/html");
			let a = t.getElementById("content_selectable")
			let b = t.getElementsByClassName("green")
			console.log(b[0].innerText);
		});
	})*/