document.getElementById('html').onclick = function(){
	location.href = location.href = `https://www.youtube.com/channel/UCshWRapXT3RFxCYOPlscGyQ/search?query=html`;
} 
document.getElementById('css').onclick = function(){
	location.href = location.href = `https://www.youtube.com/channel/UCshWRapXT3RFxCYOPlscGyQ/search?query=css`;
} 
document.getElementById('javscript').onclick = function(){
	location.href = location.href = `https://www.youtube.com/channel/UCshWRapXT3RFxCYOPlscGyQ/search?query=javascript`;
} 

let search = document.getElementById('search');
search.addEventListener("input", function(){
	let inputVal = search.value.toLowerCase();
// 	console.log('Event fired', inputVal);
	let videoCard = document.getElementsByClassName('card')
	Array.from(videoCard).forEach(function(elements){
			let cardTxt = elements.getElementsByTagName("h5")[0].innerText;
			if(cardTxt.includes(inputVal)){
				elements.style.display = 'block';
			}else{
				elements.style.display = 'none';
			}
			// console.log(cardTxt);
	})
})
