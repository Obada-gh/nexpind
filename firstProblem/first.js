const greenApi =
  "https://my-json-server.typicode.com/ahmad-athra/traffic-light-green/green-light";
const yallowApi =
  "https://my-json-server.typicode.com/ahmad-athra/traffic-light-green/yallow-light";
const redApi =
  "https://my-json-server.typicode.com/ahmad-athra/traffic-light-green/red-light";

let timerArr = [];
async function getApi(url) {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  console.log(data[0]["light-color"]);
  timerArr.push(data[0]["timer"]);

  if (data[0]["light-color"] == "yallow") {
    document.getElementById(data[0]["light-color"]).style.backgroundColor =
      "yellow";
  } else {
    document.getElementById(data[0]["light-color"]).style.backgroundColor =
      data[0]["light-color"];
  }
}

function ready() {
    setTimeout(getApi(greenApi), 1000);
    setTimeout(getApi(yallowApi), timerArr[1]);
    setTimeout(getApi(redApi), timerArr[1]);
}

// getApi(redApi);
// getApi(yallowApi);
// getApi(greenApi);

function logSubmit(event) {
  log.textContent = `Form Submitted! Email Sent Time stamp: ${event.timeStamp}`;
  event.preventDefault();
  let firstName = document.getElementById("fname").value;
  let secondName = document.getElementById("sname").value;
  let lastName = document.getElementById("lname").value;
  let country = document.getElementById("country").value;
  let countryNum = document.getElementById("num").value;

  console.log(firstName, secondName, lastName, country, countryNum);

  firstName = firstName.replace(/\b\w/g, (c) => c.toUpperCase());
  secondName = secondName.replace(/\b\w/g, (c) => c.toUpperCase());
  lastName = lastName.replace(/\b\w/g, (c) => c.toUpperCase());

  switch (countryCode) {
    case "jor":
      countryNum = "962";
      break;
    case "ksa":
      countryNum = "966";
      break;
    default:
      countryNum = "962";
  }

  console.log(firstName, secondName, lastName, country, countryNum);
}

const form = document.getElementById("form");
const log = document.getElementById("log");
form.addEventListener("submit", logSubmit);
