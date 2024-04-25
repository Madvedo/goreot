myVid = document.getElementById("melody");
imgOnOff = document.getElementById("imgOnOff");
var x = 0;
function Mute() {
  if (x == 0) {
    myVid.muted = true;
    imgOnOff.src = "/img/off.jpg";
    x = 1;
  } else {
    myVid.muted = false;
    imgOnOff.src = "/img/on.jpg";
    x = 0;
  }
}