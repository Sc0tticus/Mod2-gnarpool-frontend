const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

const driversQuery = searchParams.get('driver');
const ridersQuery = searchParams.get('rider');

const driversDropdown = document.querySelector('#driver-dropdown');
console.log("YOyo", driversDropdown)

const ridersDropdown = document.querySelector('#rider-dropdown');
console.log("YO", ridersDropdown)

const baseURL = 'http://localhost:3000';

let driversURL = `${baseURL}/drivers`;
let ridersURL = `${baseURL}/riders`;

fetch(driversURL)
  .then(response => response.json())
  .then(showDriverOptions) 

function showDriverOptions(drivers){
  drivers.forEach(driver => {
    let option = document.createElement('option')
    option.innerText = driver.name
    option.value = driver.name
    driversDropdown.appendChild(option)
  })
}

fetch(ridersURL)
  .then(response => response.json())
  .then(showRiderOptions)

  function showRiderOptions(riders){
    riders.forEach(rider => {
      let option = document.createElement('option')
      option.innerText = rider.name
      option.value = rider.name
      console.log("40",ridersDropdown)
      ridersDropdown.appendChild(option)
    })
  }

fetch(`http://localhost:3000/drivers/${id}`)
  .then(response => response.json())
  .then(driver => handleInfo(driver))

fetch(`http://localhost:3000/rides`)
  .then(response => response.json())
  .then(showRides)

function handleInfo(driver){
  renderDriverInfo(driver.name, /*driver.id,*/ driver.phone, driver.email, driver.date, driver.time, driver.resort, driver.pass, driver.venMo, driver.rides)
}

const driverShowMain = document.getElementById('driver-show-main')
const driversRidesList = document.getElementById('drivers-list-of-rides')

function showRides(rides){
  rides.forEach(ride => {
    let li = document.createElement('li')
    li.innerHTML = ride.id
    /*`<a href='driverShow.html?id=${ride.id}'>${ride.id}</a>`*/
    
    driversRidesList.appendChild(li)
  })
  }

function renderDriverInfo(name, phone, email, date, time, resort, pass, venMo/*, rides*/){

  const nameElement = document.createElement('p')
  nameElement.innerText = name

  /*const idElement = document.createElement('p')
  idElement.innerText = id?*/

  const phoneElement = document.createElement('p')
  phoneElement.innerText = phone

  const emailElement = document.createElement('p')
  emailElement.innerText = email

  const dateElement = document.createElement('p')
  dateElement.innerText = date

  const timeElement = document.createElement('p')
  timeElement.innerText = time

  const resortElement = document.createElement('p')
  resortElement.innerText = resort

  const passElement = document.createElement('p')
  passElement.innerText = pass

  const VenmoElement = document.createElement('p')
  VenmoElement.innerText = venMo

  /*const ridesElement = document.createElement('p')
  ridesElement.innerText = rides*/

  driverShowMain.append(
    nameElement,
    /*idElement,*/
    phoneElement,
    emailElement,
    dateElement,
    timeElement, 
    resortElement,
    passElement, 
    VenmoElement)

  /*driversRidesList.append(ridesElement)*/
}