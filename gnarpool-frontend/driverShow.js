const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

fetch(`http://localhost:3000/drivers/${id}`)
  .then(response => response.json())
  .then(driver => handleInfo(driver))

function handleInfo(driver){
  renderDriverInfo(driver.name, driver.phone, driver.email, driver.date, driver.time, driver.resort, driver.pass, driver.venMo)
}

const driverShowMain = document.getElementById('driver-show-main')

function renderDriverInfo(name, phone, email, date, time, resort, pass, venMo){

  const nameElement = document.createElement('h2')
  nameElement.innerText = name

  const phoneElement = document.createElement('h2')
  phoneElement.innerText = phone

  const emailElement = document.createElement('h2')
  emailElement.innerText = email

  const dateElement = document.createElement('h2')
  dateElement.innerText = date

  const timeElement = document.createElement('h2')
  timeElement.innerText = time

  const resortElement = document.createElement('h2')
  resortElement.innerText = resort

  const passElement = document.createElement('h2')
  passElement.innerText = pass

  const VenmoElement = document.createElement('h2')
  VenmoElement.innerText = venMo

  driverShowMain.append(
    gitnameElement,
    phoneElement,
    emailElement,
    dateElement,
    timeElement, 
    resortElement,
    passElement, 
    VenmoElement)
}