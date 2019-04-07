<!DOCTYPE html>
<html>
<head>
  ...
  <script
  src="http://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
</head>

$('#collapseOne').on('show.bs.collapse', function () {
    $('.panel-heading').animate({
        backgroundColor: "#515151"
    }, 500);
})

$('#collapseOne').on('hide.bs.collapse', function () {
    $('.panel-heading').animate({
        backgroundColor: "#00B4FF"
    }, 500);
})

function play() {
       var audio = document.getElementById('music');
       if (audio.paused) {
           audio.play();
           $('#play').removeClass('fa-play-circle')
           $('#play').addClass('fa-pause-circle')
       }
       else{
           audio.pause();
           audio.currentTime = 0
           $('#play').addClass('fa-play-circle')
           $('#play').removeClass('fa-pause-circle')
       }
   }
