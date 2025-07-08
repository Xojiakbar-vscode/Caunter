import React, { useState } from 'react'
import "./Counter.css"

const Counter = () => {
  let sanoq = document.getElementById('sanoq')
  let color = document.getElementById('color')
  let rang = document.getElementById('rang')
let heading = document.getElementById('counter')
let buttons = document.getElementById('button')
let buttons1 = document.getElementById('button1')
let buttons2 = document.getElementById('button2')
let box =  document.getElementById('box')


    let [count, setCount] = useState(0)

  function handleClick() {
    const newCount = count + 1;
    setCount(newCount);

    sanoq.style.color = "blue";
   const context = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = context.createOscillator();
            const gainNode = context.createGain();

            oscillator.type = 'sine';              // Oddiy sinus tovush
            oscillator.frequency.value = 200;      // Biroz balandroq (600Hz)
            gainNode.gain.value = 0.05;            // Juda past volume (yumshoq)

            oscillator.connect(gainNode);
            gainNode.connect(context.destination);

            oscillator.start();
            oscillator.stop(context.currentTime + 0.1); // Faqat 0.1 soniya
    if (newCount % 100 === 0) {
        const context = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = context.createOscillator();
    oscillator.type = 'sine'; // tovush turi: sine, square, triangle, sawtooth
    oscillator.frequency.setValueAtTime(440, context.currentTime); // 440Hz - A4 notasi
    oscillator.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.2); // 0.2 soniya chalaylik
    }
}
    function deleteClick(){
      if(count > 0){
          setCount(count-1)
        sanoq.style.color = "red";

      }

    }
    function ResClick(){
      setCount(0)
        sanoq.style.color = "purple";

    }
    function colors (){
      color.style.display = "flex";
      rang.style.display = "none";
      setTimeout(function () {
      color.style.display = "none";
      rang.style.display = "block";
  
}, 3000);

    }
    
    function res(){
        sanoq.style.color = "greenyellow";
    sanoq.style.backgroundColor= "gray";
rang.style.color= "greenyellow";
        heading.style.color = "greenyellow";
        color.style.color = "greenyellow";
        buttons.style.backgroundColor = "greenyellow";
        buttons1.style.backgroundColor = "greenyellow";
        buttons2.style.backgroundColor = "greenyellow";
      box.style.background = "black"
        box.style.border = "none"
    }
function qizil(){
        sanoq.style.color = "red";
    sanoq.style.backgroundColor= "white";
rang.style.color= "red";
        heading.style.color = "red";
        color.style.color = "red";
        buttons.style.backgroundColor = "red";
        buttons1.style.backgroundColor = "red";
        buttons2.style.backgroundColor = "red";
      box.style.background = "linear-gradient(135deg,blue,purple,red)"
        box.style.border = "1px solid red"




}
function kok(){
    sanoq.style.color = "blue";
    sanoq.style.backgroundColor= "gray"
rang.style.color= "blue";

        heading.style.color = "blue";
        color.style.color = "blue";
        buttons.style.backgroundColor = "blue";
        buttons1.style.backgroundColor = "blue";
        buttons2.style.backgroundColor = "blue";
         box.style.background = "linear-gradient(135deg,red,purple,blue)"
        box.style.border = "1px solid blue"
}
function binafsha(){
  sanoq.style.color = "purple";
    sanoq.style.backgroundColor= "black"
rang.style.color= "purple";

        heading.style.color = "purple";
        color.style.color = "purple";
        buttons.style.backgroundColor = "purple";
        buttons1.style.backgroundColor = "purple";
        buttons2.style.backgroundColor = "purple";
        box.style.background = "linear-gradient(135deg,blue,red,purple)"
        box.style.border = "1px solid purple"
}
  return (
    <div>
        <div className="container">
          <div className="box" id='box'>
            
      <h1 id='sanoq'>{count}</h1>
      <h1 id='counter'>COUNTER</h1>
      <p onClick={colors} id='rang'><i class="fa-solid fa-droplet"></i></p>
      <ul id='color'>
      <li onClick={qizil}>qizil</li>
      <li onClick={kok}>kok</li>
      <li onClick={binafsha}>binafsha</li>
      <li onClick={res}>Res</li>
      </ul>
      <div className="buttons">
      <button id='button' onClick={handleClick}>Add</button>
      <button id='button1' onClick={deleteClick}>Delete</button>
      <button id='button2' onClick={ResClick}>Resert</button>
</div>
</div>
      </div>
      
    </div>
  )
}

export default Counter
