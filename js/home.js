const vid =document.getElementById('video-song');


if (window.matchMedia('(prefer-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");

}

function vidFade(){
    vid.classList.add("stopfade");

}

vid.addEventListener('ended',function() {
    vidFade();
});


