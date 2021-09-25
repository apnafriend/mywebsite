function myFunction(){
    var copyText = document.getElementById('myInput');
    var copyButton = document.getElementById('CopyButton');
    var copy = document.getElementById('copy');
    // Select the text field 
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(copyText.value);
    copy.style.display = 'block';
    copyButton.disabled = 'true';
}
document.getElementById('shareWhatsapp').onclick = function(){
    let shareText = `Apna Friend tech me to learn web development from basic to advanced . To chackout the website click here ${copyText}. Thanks .`;
    location.href = `whatsapp://send?text=${shareText}`;
}
document.getElementById('video').onclick = function(){
    location.href = 'video.html';
}
apk.onclick = function(){
    location.href = 'https://github.com/apnafriend/mywebsite/raw/main/apk/Apna%20Friend.apk';
}
var apk = document.getElementById('apk');
