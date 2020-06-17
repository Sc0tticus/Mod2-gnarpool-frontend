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
    option.value = parseInt(driver.id)

    console.log("HI",option.value)
    
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
      option.value = parseInt(rider.id)
      ridersDropdown.appendChild(option)
    })
  }

  fetch(`http://localhost:3000/rides`)
  .then(response => response.json())
  .then(showRides)

const driversRidesList = document.getElementById('drivers-list-of-rides')

function showRides(rides){
  rides.forEach(ride => {
    let li = document.createElement('li')
    li.innerHTML = ride.id
    /*`<a href='driverShow.html?id=${ride.id}'>${ride.id}</a>`*/
    driversRidesList.appendChild(li)
  })
  }


fetch(`http://localhost:3000/riders/${id}`)
  .then(response => response.json())
  .then(rider => handleInfo(rider))

function handleInfo(rider) {
  renderRiderInfo(rider)
}

const riderShowMain = document.getElementById('rider-show-main')

function renderRiderInfo(name, phone, email, date, time, resort, pass, venMo){

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


fetch(`http://localhost:3000/drivers/`)
  .then(response => response.json())
  .then(driver => renderDriversOptions(driver))

function renderDriversOptions(drivers) {
  console.log(drivers)
  drivers.forEach(driver => {
    let option = document.createElement('option')
    option.innerText = driver.name
    option.value = driver
    ridersDropdown.appendChild(option)
  })
}