
// # Plays video if the player is loaded, otherwise just waits until it's done loading.
$(document).ready(function() {
  //TODO switch .top-bar etc with classes from about.haml
  $('.play-button').on('click', function(e) {
    e.preventDefault();

    $('body').addClass('hidden-scrollbar');
    $('.video-modal').velocity('transition.shrinkIn', {
      display: 'block'
    });

    // if (playerReady) {
    //   player.playVideo();
    // } else {
    //   needsToPlay = true;
    // }
  });

  $('.video-modal .close').on('click', function(e) {
    e.preventDefault();
    // player.pauseVideo();
    $('body').removeClass('hidden-scrollbar');

    $('.video-modal').velocity('transition.shrinkOut', {
      display: 'none'
    });
  });
});
