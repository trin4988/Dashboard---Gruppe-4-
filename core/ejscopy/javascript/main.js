//function to start the time start here
//give the clock element id "clock"
function Showtime() {
  var date = new Date();
  var h = date.getHours(); //0 - 23
  var m = date.getMinutes();//0 - 59
  var s = date.getSeconds();//0 - 59

  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }

  var time = h + ":" + m + ":" + s;
  document.getElementById('clock').innerText = time;
  document.getElementById('clock').textContent = time;
setTimeout(Showtime, 1000);

}
Showtime();
//function stops here


//function to find current date start here
//give date element id "date"
var date = new Date();
document.getElementById('date').innerHTML = date.toDateString();
//stops here



var tWidth='900%';                  // width (in pixels)
var tHeight='2em';                  // height (in pixels)
var tcolour='#fff';               // background colour:
var moStop=true;                     // pause on mouseover (true or false)
var fontfamily = 'arial,sans-serif'; // font for content
var tSpeed=4;                        // scroll speed (1 = slow, 5 = fast)

// enter your ticker content here (use \/ and \' in place of / and ' respectively)
var content='news bla news bla news bla news bla news bla news bla news bla news bla news bla news bla news bla news bla news bla news bla';

var cps=-tSpeed; var aw, mq; var fsz = parseInt(tHeight) - 4; function startticker(){if (document.getElementById) {var tick = '<div style="position:relative;width:'+tWidth+';height:'+tHeight+';overflow:hidden;background-color:'+tcolour+'"'; if (moStop) tick += ' onmouseover="cps=0" onmouseout="cps=-tSpeed"'; tick +='><div id="mq" style="position:absolute;left:0px;top:0px;font-family:'+fontfamily+';font-size:'+fsz+'px;white-space:nowrap;"><\/div><\/div>'; document.getElementById('news-text').innerHTML = tick; mq = document.getElementById("mq"); mq.style.left=(10+parseInt(tWidth))+"px"; mq.innerHTML='<span id="tx">'+content+'<\/span>'; aw = document.getElementById("tx").offsetWidth; righttime=setInterval("scrollticker()",50);}} function scrollticker(){mq.style.left = (parseInt(mq.style.left)>(-10 - aw)) ?
mq.style.left = parseInt(mq.style.left)+cps+"px": parseInt(tWidth)+10+"px";} window.onload=startticker;
