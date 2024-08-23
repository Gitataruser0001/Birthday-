// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
  var newWidth = $win.width();
  var newHeight = $win.height();
  if (newWidth != clientWidth && newHeight != clientHeight) {
    location.replace(location);
  }
});

(function($) {
  $.fn.typewriter = function() {
    this.each(function() {
      var $ele = $(this),
        str = $ele.html(),
        progress = 0;
      $ele.html('');
      var timer = setInterval(function() {
        var current = str.substr(progress, 1);
        if (current == '<') {
          progress = str.indexOf('>', progress) + 1;
        } else {
          progress++;
        }
        $ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
        if (progress >= str.length) {
          clearInterval(timer);
        }
      }, 75);
    });
    return this;
  };
})(jQuery);

function timeElapse() {
  var startDate = '2011-08-26';
  var current = new Date();
  var seconds = (Date.parse(current) - Date.parse(startDate)) / 1000;
  var days = Math.floor(seconds / (3600 * 24));
  seconds = seconds % (3600 * 24);
  var minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  var result = "Days <span class=\"digit\">" + days + "</span> Minutes <span class=\"digit\">" + minutes + "</span> Seconds <span class=\"digit\">" + seconds + "</span>";
  $("#clock").html(result);
  var text = "THE WORLD JUST GOT LUCKIER SINCE ";
  $("#message-box").html(text);
}

// Update the display every second
setInterval(timeElapse, 1000);
