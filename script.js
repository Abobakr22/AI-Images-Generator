//get secret api Key from openAi site
let api = "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";

//get elements from Html
let inp = document.getElementById('inp');
let images = document.querySelector('.images');

//making a request to openAi Api , confiquring request
let getImage = async () => {
	let methods = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${api}`
		},
		body: JSON.stringify(
			{
				"prompt": inp.value,
				"n": 3,
				"size": "256x256",
			}
		)
	};
	let res = await fetch("https://api.openai.com/v1/images/generations", methods);
	//parse response as json .. converting response to json
	let data = await res.json();
	console.log(data);

	const listImages = data.data;
	images.innerHTML = ''; // to clear last result

	listImages.map(photo => {
		const container = document.createElement("div"); //create container for picture inside images div
		images.append(container);
		const img = document.createElement("img"); //add img to created div(container)
		container.append(img);
		img.src = photo.url;
	});

};