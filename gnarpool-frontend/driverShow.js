const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

const driversQuery = searchParams.get('driver');
const ridersQuery = searchParams.get('rider');

const driversDropdown = document.querySelector('#driver-dropdown');


const ridersDropdown = document.querySelector('#rider-dropdown');


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
    option.value = driver.id
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
      option.value = rider.id
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
  renderDriverInfo(driver.name, driver.phone, driver.email, driver.date, driver.time, driver.resort, driver.pass, driver.venMo, driver.rides)
}

const driverShowMain = document.getElementById('driver-show-main')
const driversRidesList = document.getElementById('drivers-list-of-rides')

function showRides(rides){
  rides.forEach(ride => {
    let li = document.createElement('li')
    li.innerHTML = ride.id
    
    driversRidesList.appendChild(li)
  })
  }

function renderDriverInfo(name, phone, email, date, time, resort, pass, venMo/*, rides*/){

  const nameElement = document.createElement('p')
  nameElement.innerText = name

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
    phoneElement,
    emailElement,
    dateElement,
    timeElement, 
    resortElement,
    passElement, 
    VenmoElement)
}