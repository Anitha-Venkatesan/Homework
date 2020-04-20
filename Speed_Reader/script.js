var words =document.getElementById("words");
var counter =document.getElementById("timer");

function prepareRead() {
  // Create the countdown timer.
 var timerCount =5;
  var countDownTimer=setInterval(countDown ,1000)
  function countDown()
  {
      if(timerCount >=0)
      {
        counter.innerHTML = timerCount;
        timerCount--;
        
      }
      if (timerCount < 0) {
        x();
        counter.innerHTML = " ";
        clearInterval(countDownTimer); 
        
      }
 }    
}
prepareRead();

function x()
{
  // Print words to the screen one at a time.
  var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
  var arrPoem = poem.split(" ");
  var i=0;
  var speadReadtimer=setInterval(speedRead ,1000);
  function speedRead()
  {
   
    if(i<=arrPoem.length)
    {
      words.innerHTML= arrPoem[i];
      i++;
    }
    if(i>arrPoem.length)
    {
      words.innerHTML = " ";
    clearInterval(speadReadtimer);
    }
  }
}


