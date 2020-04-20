var eventType = document.querySelector("#event-type"); 
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");
var keySpanEl = document.getElementById("key");
var codeSpanEl = document.getElementById("code");
var statusSpanEl = document.getElementById("status");
var targetSpanEl=document.getElementById("target");
var xSpanEl=document.getElementById("x");
var ySpanEl=document.getElementById("y");




function toggleDisplay(event) {
  var value = event.target.value;
  
  if(value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
  }
  else {
    mouseEventsEl.classList.remove("hide");
   keyEventsEl.classList.add("hide");
  }
}


function keyEvent(event)
{
    keySpanEl.textContent=String.fromCharCode(event.which);
    codeSpanEl.textContent=event.keyCode;
   
   
}

function keyUpEvent(event)
{
    statusSpanEl.textContent='keyup';
}

function keyDownEvent(event)
{
    statusSpanEl.textContent='keydown';
}

function keyClick(event)
{
    targetSpanEl.textContent = event.target.textContent;
    xSpanEl.textContent = event.clientX;
    ySpanEl.textContent = event.clientY;
}


eventType.addEventListener("change" ,toggleDisplay);
document.addEventListener("keypress",keyEvent);
document.addEventListener("keydown",keyDownEvent);
document.addEventListener("keyup",keyUpEvent);
document.addEventListener("click",keyClick);
//document.getBoundingClientRect("click",keyClick);

