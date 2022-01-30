$( document ).ready(function() {
    console.log( "ready!" );
    loadPlayer();
});

function getArtistId() {
	var a =$('#VideoID').text();
  return a;
}

function loadPlayer() { 
  if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {

    var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    window.onYouTubePlayerAPIReady = function() {
      onYouTubePlayer();
    };
  }
}

var player;

function onYouTubePlayer() {
  player = new YT.Player('player', {
    height: '400',
    width: '730',
    videoId: getArtistId(),
    playerVars: { controls:1, showinfo: 0, rel: 0, showsearch: 0, iv_load_policy: 3 },
    events: {
      'onStateChange': onPlayerStateChange,
      'onError' : onPlayerError
    }
  });
}

  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      // setTimeout(stopVideo, 6000);
      done = true;
    }
    else if(event.data == YT.PlayerState.ENDED)
    {
      location.reload();
    }
  }

  function onPlayerReady(event) {
  }
function onPlayerError(event) {
  window.location.reload(true); 
}

 
  function timejump(second,ID){
	  var btn=document.getElementById(ID);
	  btn.onclick=function(){
		  player.seekTo(second,true);
	  }
  }