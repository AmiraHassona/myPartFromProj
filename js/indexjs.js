var playVideoBtn = document.getElementById("playVideoBtn") ;
var lightBoxVideo = document.getElementById("lightBoxVideo");
var iframeSrc =document.getElementById("iframeSrc");


playVideoBtn.addEventListener("click" , function(){
    lightBoxVideo.style.visibility = "visible";

});


lightBoxVideo.addEventListener("click", function(){
    lightBoxVideo.style.visibility = "hidden";
    iframeSrc.removeAttribute("src") ;
});
