var endpoint = 'https://api.geoapify.com/v1/ipinfo?&apiKey=9562a9825e054f34a17eb5f82591904f';

function body_design(){
	var api_data = JSON.parse(sessionStorage.getItem("api_data"));
	document.querySelector('.spend-data .data').innerHTML = api_data.country.name.substring(0, 16);
	document.querySelector('.location-data .data').innerHTML = api_data.city.name.substring(0, 16);
	document.querySelector('.ip-data .data').innerHTML = api_data.ip.substring(0, 16);
	document.querySelector('.long-data .data').innerHTML = api_data.location.longitude;
	document.querySelector('.late-data .data').innerHTML = api_data.location.latitude;
}

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	var response = JSON.parse(this.responseText);
	var api_data = sessionStorage.setItem("api_data",this.responseText);
	body_design();
};

if(!sessionStorage.getItem("api_data")){
	xhr.open('GET', endpoint, true);
	xhr.send()
}else{
	body_design();
}
