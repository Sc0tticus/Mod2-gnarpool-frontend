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

const driversRidesList = document.getElementById('drivers-list-of-rides')

fetch(`http://localhost:3000/riders/${id}`)
  .then(response => response.json())
  .then(rider => handleInfo(rider))

function handleInfo(rider) {
  renderRideInfo(rider)
  renderRiderInfo(rider)
}

const ridesShow = document.getElementById('rides-show')

function renderRideInfo(rider){
  console.log(rider.drivers)
  let ridername = rider.name
  rider.drivers.forEach(driver => {
    const ele = document.createElement('p')
    ele.innerText = ridername + " will be riding with " + driver.name + " at " + driver.time
    driversRidesList.append(ele)
  })
  
}

const riderShowMain = document.getElementById('rider-show-main')

function renderRiderInfo(rider){
  addRiderInfo("Name:",rider.name)
  addRiderInfo("Phone:",rider.phone)
  addRiderInfo("Email:",rider.email)
  addRiderInfo("Time:",rider.time)
  addRiderInfo("Resport:",rider.resort)
  addRiderInfo("Pass:",rider.pass)
  addRiderInfo("VenMo:",rider.VenMo)
}

function addRiderInfo(id,stat) {
  const ele = document.createElement('p')
  ele.innerText = id + " " + stat
  riderShowMain.append(ele)
}
 
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