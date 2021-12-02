const greenApi ="https://my-json-server.typicode.com/ahmad-athra/traffic-light-green/green-light";
const yallowApi ="https://my-json-server.typicode.com/ahmad-athra/traffic-light-green/yallow-light";
const redApi ="https://my-json-server.typicode.com/ahmad-athra/traffic-light-green/red-light";
async function getApi(url,color) {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data[0]["light-color"]);
  document.getElementById(color).style.backgroundColor=color
  
  
}

async function ready(){
   await  getApi(redApi,'red');
   await  getApi(yallowApi,'yellow');
   await  getApi(greenApi,'green');
}


function logSubmit(event) {
    log.textContent = `Form Submitted! Email Sent Time stamp: ${event.timeStamp}`;
    event.preventDefault();
    let firstName = document.getElementById('fname');
    let secondName = document.getElementById('sname');
    let lastName = document.getElementById('lname');
    let countryCode = document.getElementById('country');

  }
  
  const form = document.getElementById('form');
  const log = document.getElementById('log');
  form.addEventListener('submit', logSubmit);




