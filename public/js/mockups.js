// sorry hannah
/*
$(document).on('click', ".start-button",
	function () {
		$(".start-button").addClass("explode");	
});

-- worked but broke color fading: --
//Mobile GOAL message
ws.onmessage = function(data, flags) {

  $scope.$apply(function(){
    data = JSON.parse(data.data);
    if (data.messageType==='goal') {
      $scope.excited = true;
      $timeout(function(){
        $scope.excitedClimax = true;
      }, 600)
      $timeout(function(){
        $scope.excited = false;
        $scope.excitedClimax = false;
      }, 1600)
    }
  });
};

*/

// Mouseover/ Click sound effect- by JavaScript Kit (www.javascriptkit.com)
// Visit JavaScript Kit at http://www.javascriptkit.com/ for full source code


var html5_audiotypes={ //define list of audio file extensions and their associated audio types. Add to it if your specified audio file isn't on this list:
	"mp3": "audio/mpeg",
	"mp4": "audio/mp4",
	"ogg": "audio/ogg",
	"wav": "audio/wav"
}

function createsoundbite(sound){
	var html5audio=document.createElement('audio')
	if (html5audio.canPlayType){ //check support for HTML5 audio
		for (var i=0; i<arguments.length; i++){
			var sourceel=document.createElement('source')
			sourceel.setAttribute('src', arguments[i])
			if (arguments[i].match(/\.(\w+)$/i))
				sourceel.setAttribute('type', html5_audiotypes[RegExp.$1])
			html5audio.appendChild(sourceel)
		}
		html5audio.load()
		html5audio.playclip=function(){
			html5audio.play()
		}
		return html5audio
	}
	else{
		return {playclip:function(){throw new Error("Your browser doesn't support HTML5 audio unfortunately")}}
	}
}

var clicksound=createsoundbite("mp3/goal.mpg")
