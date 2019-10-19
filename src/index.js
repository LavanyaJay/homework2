//function to fetch and display Luke Skywalker
function fetchData() {
	fetch(`https://swapi.co/api/people/1`) 
		.then(response => response.json()) 
		.then(myJson => {
			// display data in the browser
			const displayContent = document.getElementsByTagName("dd");

			displayContent[0].innerHTML = JSON.stringify(myJson.name);
			displayContent[1].innerHTML = JSON.stringify(myJson.height);
			displayContent[2].innerHTML = JSON.stringify(myJson.mass);
			displayContent[3].innerHTML = JSON.stringify(myJson.birth_year);
			displayContent[4].innerHTML =
				"<pre>" + JSON.stringify(myJson.films, null, " ") + "</pre>";
		});
}
//function to fetch and display Darth Vader on button click
function searchById() {
	fetch(`https://swapi.co/api/people/4/`) 
		.then(response => response.json()) 
		.then(myJson => {
			// display data in the browser
			const displayContent = document.getElementsByTagName("dd");
			const displayImg = document.getElementById("imgId");
			displayContent[0].innerHTML = JSON.stringify(myJson.name);
			displayContent[1].innerHTML = JSON.stringify(myJson.height);
			displayContent[2].innerHTML = JSON.stringify(myJson.mass);
			displayContent[3].innerHTML = JSON.stringify(myJson.birth_year);
			displayContent[4].innerHTML =
				"<pre>" + JSON.stringify(myJson.films, null, " ") + "</pre>";
			displayImg.src =
				"https://asset.swarovski.com/images/$size_465/t_swa001/f_auto/5379499/star-wars---darth-vader-swarovski-5379499.jpg";
		});
}
