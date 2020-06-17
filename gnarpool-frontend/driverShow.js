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