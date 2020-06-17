const searchParams = new URLSearchParams(window.location.search);

const resortQuery = searchParams.get('resort');
const dateQuery = searchParams.get('date');
const passQuery = searchParams.get('pass');

const dropdown1 = document.querySelector('#dropdown1');
const dropdown2 = document.querySelector('#dropdown2');
const dropdown3 = document.querySelector('#dropdown3');
console.log(dropdown1)
const baseURL = "http://localhost:3000";
let driversURL = `${baseURL}/drivers`;

if (resortQuery){
  driversURL = `${driversURL}?resort=${resortQuery}`;
}
if (dateQuery){
  driversURL = `${driversURL}?date=${dateQuery}`;
}
if (passQuery){
  driversURL = `${driversURL}?pass=${passQuery}`;
}

fetch(driversURL)
  .then(response => response.json())
  .then(showDrivers)

fetch(driversURL)
  .then(response => response.json())
  .then(showDriverOptions) 

  const driversList = document.getElementById('drivers-list')

  function showDrivers(drivers){
    drivers.forEach(driver => {
      let li = document.createElement('li')
      li.innerHTML = `<a href='driverShow.html?id=${driver.id}'>${driver.name}</a> 
                      is going to ${driver.resort} at
                      ${Date(Date.parse(driver.time))}`
      driversList.appendChild(li)
    })
  }

  function showDriverOptions(drivers){
    drivers.forEach(driver => {
      addOption(driver.resort, dropdown1)
      addOption(driver.date, dropdown2)
      addOption(driver.pass, dropdown3)
    })
  }

  function addOption(element, dropdown) {
    let option = document.createElement('option')
    option.innerText = element
    option.value = element
    dropdown.appendChild(option)
  }
