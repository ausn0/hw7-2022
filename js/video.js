var video = document.getElementById("player1");
var slider = document.getElementById("slider");
var vol = document.getElementById("volume");



window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.load();
	vol.innerHTML = "100%";
});

slider.addEventListener("change", function(x){
	vol.innerHTML = x.currentTarget.value + "%";	
	video.volume = x.currentTarget.value / 100;
})
document.getElementById("play").addEventListener("click", function(){
	console.log("Play Video");
	video.play();
});

document.getElementById("pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause();
});

document.getElementById("slower").addEventListener("click", function(){
	console.log("Slowed down");
	video.playbackRate = video.playbackRate - .10;
	console.log(video.playbackRate);
})

document.getElementById("faster").addEventListener("click", function(){
	console.log("Sped up");
	video.playbackRate = video.playbackRate + .10;
	console.log(video.playbackRate);
})

document.getElementById("skip").addEventListener("click", function(){
	console.log("Skipped");
	video.currentTime = video.currentTime + 10;
	if (video.currentTime >= video.duration){
		video.currentTime = 0;
	}
	console.log(video.currentTime);
})

document.getElementById("mute").addEventListener("click", function(){
	video.volume = 0;
	vol.innerHTML = "0%";
	slider.value = 0;
})

document.getElementById("vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");
})

document.getElementById("orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
})

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

