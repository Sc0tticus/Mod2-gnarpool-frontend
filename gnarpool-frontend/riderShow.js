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