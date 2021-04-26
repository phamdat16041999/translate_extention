chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	(async () => {
		const payload = await translate(request);
		/*      console.log("thumbPayload after function:", payload)*/
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
	let t = new DOMParser().parseFromString(data, "text/html");
	var content = [];
	var heading = t.getElementsByClassName("fl")[2].innerText.split(" ");
	var pronounce = heading[5].split("/");
	console.log(pronounce.length);
	if(pronounce.length > 3)
	{
		pronounce = pronounce[1].split("'");
		if(pronounce.length == 1){
			pronounce = pronounce[0];
		}
		else{
			pronounce = pronounce[1];
		}
	}
	else
	{
		pronounce = pronounce[1];
	}
	heading = heading[4];
	var mean = t.getElementsByClassName("green")[0].innerText;
	content.push(heading);
	content.push(mean);
	content.push(pronounce);
	return content;
}

