var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;

var transforms = ["transform",
                  "msTransform",
                  "webkitTransform",
                  "mozTransform",
                  "oTransform"];

var transformProperty = getSupportedPropertyName(transforms),
  head = document.querySelector(".head"),
  scrolling = false,
  mouseWheelActive = false,
  count = 0,
  mouseDelta = 0,
  scrollPos = 0,
  windowHeight = parseInt(window.innerWidth, 10),
  opacityBreakPoint = parseInt(window.innerWidth, 10) / 2;

//
// vendor prefix management
//
function getSupportedPropertyName(properties) {
  for (var i = 0; i < properties.length; i++) {
    if (typeof document.body.style[properties[i]] != "undefined") {
      return properties[i];
    }
  }
  return null;
}

function setup() {

  animationLoop();
}

if (parseInt(window.innerWidth, 10) > 575) {
  //setup();
}

function animationLoop() {

  requestAnimationFrame(animationLoop);
}


$(function(){
  $(".content").removeClass("hidden")
})
