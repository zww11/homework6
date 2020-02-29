var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
	document.querySelector(".play").innerHTML = ('<img src="images/play_button.jpg" alt="Play Button" />') + "Play Video";
	document.querySelector(".pause").innerHTML = ('<img src="images/pause_button.png" alt="Pause Button" />') + "Pause Video";
}

function playVid() { 
	video.play();
	console.log("Play Video");
	console.log(video);
	//Set the volumm variable
	//Change its text
	volume = document.querySelector("#volume"); 
	console.log(volume);
	volume.innerHTML = (video.volume * 100) + "%";

} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate -=.2
  	console.log("Speed is "+video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate +=.25
	console.log("Speed is "+video.playbackRate);
} 

function skipAhead() {
	video.currentTime += 1
	console.log("Current location is "+ video.currentTime);
	if (video.ended) {
		video.currentTime = 0
		video.playbackRate = 0
		console.log("Reset")
	}
	
} 

function mute() { 
	console.log(video.muted)
  	if (video.muted) {
  		video.muted = false;
  		console.log("Changing to Unmuted");
  		var button = document.querySelector("#mute");
  		button.innerHTML = "Muted";
  	} 
  	else {
  		video.muted = true;
      	console.log("Changing to Muted");
      	var button = document.querySelector("#mute");
  		button.innerHTML = "Unmuted";
  	}
}

function changeVolume() {
	let slider = document.querySelector("#volumeSlider")
	console.log(slider.value)
	video.volume = slider.value/100;
	console.log("Volume is " + video.volume);
	volume.innerHTML = (slider.value) + "%";
}
       

function gray() { 
	document.getElementById("myVideo").style.filter = "grayscale(100%)";
	console.log("In grayscale");
}

function color() {
	document.getElementById("myVideo").style.filter = "none";
	console.log("In color") 
}
