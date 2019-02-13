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



function getStringWidth(str) {

    var span = document.createElement("span");
    span.innerText = str;
    span.style.visibility = "hidden";

    var body = document.getElementsByTagName("body")[0];
    body.appendChild(span);
    var textWidth = span.offsetWidth;
    body.removeChild(span);

    return textWidth;
}

function getAnimationRule(animationName) {
    var KEYFRAME_RULE = window.CSSRule.WEBKIT_KEYFRAMES_RULE ||
        window.CSSRule.MOZ_KEYFRAMES_RULE ||
        window.CSSRule.KEYFRAMES_RULE;

    var stylesheets = document.styleSheets;
    for (var i = 0 ; i < stylesheets.length ; i++) {
        var rules = stylesheets[i].cssRules;
        for (var j = 0 ; j < rules.length ; j++) {
            var rule = rules[j];
            if (rule.type == KEYFRAME_RULE && rule.name == "marquee") {
                return rule;
            }
        }
    }
}

function updateMarqueeAmplitude(element) {

    var animationName = "marquee";
    var marqueeRule = getAnimationRule(animationName);
    if (null == marqueeRule) {
        return;
    }

    // remove the old animation (if any)
    element.style.webkitAnimationName = "none";

    var textWidth = getStringWidth(element.innerText);

    // update the values of our keyframe animation
    marqueeRule.deleteRule("0%");
    marqueeRule.deleteRule("100%");
    marqueeRule.insertRule('0% { text-indent: ' + element.offsetWidth + 'px; }');
    marqueeRule.insertRule('100% { text-indent: ' + -textWidth + 'px; }');

    // re-assign the animation (to make it run)
    element.style.webkitAnimationName = animationName;
}

updateMarqueeAmplitude(document.querySelector(".marquee"));
