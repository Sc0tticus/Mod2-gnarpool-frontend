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


  function handleInfo(driver){
    renderDriverInfo(driver)
    renderRideInfo(driver)
  }


  function renderRideInfo(driver){
    let drivename = driver.name
    driver.riders.forEach(rider => {
      const ele = document.createElement('p')
      ele.innerText = drivename + " will be riding with " + rider.name + " at " + driver.time
      driversRidesList.append(ele)
    })
    
  }
  
const driversRidesList = document.getElementById('drivers-list-of-rides')

  const driverShowMain = document.getElementById('driver-show-main')

  function renderDriverInfo(driver){
    addDriverInfo("Name:", driver.name)
    addDriverInfo("Phone:", driver.phone)
    addDriverInfo("Email:", driver.email)
    addDriverInfo("Time:",driver.time)
    addDriverInfo("Resort:",driver.resort)
    addDriverInfo("Pass:",driver.pass)
    addDriverInfo("VenMo:", driver.VenMo)
  }
  
  function addDriverInfo(id, stat) {
    const ele = document.createElement('p')
    ele.innerText = id + " " + stat
    driverShowMain.append(ele)
  }