document.getElementById("download").onclick = function () {
  location.href = "html/download.html";
};
document.getElementById("join").onclick = function () {
  location.href = "https://www.youtube.com/channel/UCshWRapXT3RFxCYOPlscGyQ";
};
// var html = document.getElementById('html').onclick = function(){
//     location.href = `https://www.youtube.com/channel/UCshWRapXT3RFxCYOPlscGyQ/search?query=${html}`;
// }
let loading = document.getElementById("loading");
window.addEventListener("load", function () {
  loading.style.display = "none";
});
const search = document.getElementById("search");
const btn = document.getElementById("button");
btn.onclick = function () {
  if (!search.value =="") {
    location.href = `https://www.youtube.com/channel/UCshWRapXT3RFxCYOPlscGyQ/search?query=${search.value}`;
  } else {
    alert("Please Enter the value");
  }
};
