const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

const ridersDropdown = document.querySelector("#ridersDropdown")
console.log(ridersDropdown)

fetch(`http://localhost:3000/riders/${id}`)
  .then(response => response.json())
  .then(rider => handleInfo(rider))

function handleInfo(rider) {
  renderRiderInfo(rider)
}

const riderShowMain = document.getElementById('rider-show-main')

function renderRiderInfo(rider) {
  addRiderInfo(rider.name)
  addRiderInfo(rider.phone)
  addRiderInfo(rider.email)
  addRiderInfo(rider.pass)
  addRiderInfo(rider.resort)
  addRiderInfo(rider.time)
}

function addRiderInfo(thing) {
  const ele = document.createElement('h2')
  ele.innerText = thing
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