const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

fetch(`http://localhost:3000/riders/${id}`)
  .then(response => response.json())
  .then(rider => handleInfo(rider))

function handleInfo(rider){
  renderRiderInfo(rider.name, rider.phone, rider.email, rider.date, rider.time, rider.resort, rider.pass, rider.venMo)
}

const riderShowMain = document.getElementById('rider-show-main')

function renderRiderInfo(name, phone, email, date, time, resort, pass, venMo){

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

  riderShowMain.append(
    nameElement,
    phoneElement,
    emailElement,
    dateElement,
    timeElement, 
    resortElement,
    passElement, 
    VenmoElement)
}