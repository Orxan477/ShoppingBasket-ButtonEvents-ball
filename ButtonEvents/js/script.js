let area=document.querySelector(".area");
let areaWidth = area.clientWidth;
let areaHeight=area.clientHeight;

document.addEventListener("keydown", (ev) => {
  let ball = document.querySelector(".ball");
  let ballHeight = ball.clientHeight;
  let ballWidth= ball.clientWidth;

  let leftPixel = Number(ball.style.left.replace("px", ""));
  let topPixel = Number(ball.style.top.replace("px", ""));
  if (ev.keyCode == 38) {
    if (topPixel!=0) {
      ball.style.top = `${--topPixel}px`;
    }
    else{
      alert("topPixel-i 0 oldugu ucun geriye gede bilmez");
    }



  } else if (ev.keyCode == 40) {
    if (topPixel!=areaHeight-ballHeight) {
      ball.style.top = `${++topPixel}px`;
    }
    else{
    alert("topPixel max oldugu ucun ireli gede bilmez")}



  } else if (ev.keyCode == 37) {
    if (leftPixel!=0) {
      ball.style.left = `${--leftPixel}px`;
    }
    else{
      alert("leftPixel-i 0 oldugu ucun geriye gede bilmez");
    }



  } else if (ev.keyCode == 39) {
    if (leftPixel!=areaWidth-ballWidth) {
      ball.style.left = `${++leftPixel}px`;
    }
    else{
      alert("leftPixel max oldugu ucun ireli gede bilmez");
    }
  }
});

