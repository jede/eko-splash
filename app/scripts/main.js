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
  window.addEventListener("scroll", setScrolling, false);

  // deal with the mouse wheel
  window.addEventListener("mousewheel", mouseScroll, false);
  window.addEventListener("DOMMouseScroll", mouseScroll, false);

  animationLoop();
}

if (parseInt(window.innerWidth, 10) > 575) {
  //setup();
}

function mouseScroll(e) {
  mouseWheelActive = true;
}

// Called when a scroll is detected
function setScrolling() {
  scrolling = true;
}

// Cross-browser way to get the current scroll position
function getScrollPosition() {
  return document.documentElement.scrollTop || document.body.scrollTop;
}

// A performant way to shift our image up or down
function setTranslate3DTransform(element, yPosition) {
  var value = "translate3d(0px" + ", " + yPosition + "px" + ", 0)";
  element.style[transformProperty] = value;
}

function animationLoop() {
  // adjust the image's position when scrolling
  if (scrolling) {
    scrollPos = getScrollPosition();
    setTranslate3DTransform(head, 1 - scrollPos / windowHeight);
    /*if (scrollPos > opacityBreakPoint) {
      head.style.opacity = 1 - (scrollPos - opacityBreakPoint) / opacityBreakPoint;
    } else {
      head.style.opacity = 1;
    }*/
    scrolling = false;
  }

  /*
  // scroll up or down by 10 pixels when the mousewheel is used
  if (mouseWheelActive) {
    window.scrollBy(0, -mouseDelta * 15);
    count++;

    // stop the scrolling after a few moments
    if (count > 20) {
      count = 0;
      mouseWheelActive = false;
      mouseDelta = 0;
    }
  }
  */
  requestAnimationFrame(animationLoop);
}
