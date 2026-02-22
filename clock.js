$.fn.extend({ 
  disableSelection: function() { 
      this.each(function() { 
          if (typeof this.onselectstart != 'undefined') {
              this.onselectstart = function() { return false; };
          } else if (typeof this.style.MozUserSelect != 'undefined') {
              this.style.MozUserSelect = 'none';
          } else {
              this.onmousedown = function() { return false; };
          }
      }); 
  } 
});

$(document).ready(function() {
    $('body').disableSelection(); 
    clockUpdate();
    setInterval(clockUpdate, 1000);
})
  
function clockUpdate() {
  var date = new Date();
  var am = true;
  var amPm = "AM";

  $('.clock').css({'color': 'black'});
  function addZero(x) {
    if (x < 10) {
      return x = '0' + x;
    } else {
      return x;
    }
  }

  function twelveHour(x) {
    if (x > 12) {
      am = false;
      return x = x - 12;
    } else if (x == 0) {
      return x = 12;
    } else if (x == 12){
      am = false;
    } 
    return x;
  }

  var h = addZero(twelveHour(date.getHours()));
  var m = addZero(date.getMinutes());
  if (!am){
      amPm = "PM"
  }

  $('.clock').text(h + ':' + m + ' ' + amPm)
}
