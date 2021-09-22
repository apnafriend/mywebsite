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
    let shareText = 'Apna Friend teach me amazing coding with html, css and javascript .';
    location.href = `whatsapp://send?text=${shareText}`;
}
document.getElementById('video').onclick = function(){
    location.href = 'apnaFriend/html/video.html?';
}