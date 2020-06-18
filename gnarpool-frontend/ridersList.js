const searchParams = new URLSearchParams(window.location.search);

const resortQuery = searchParams.get('resort');
const dateQuery = searchParams.get('date');
const passQuery = searchParams.get('pass');

const dropdown1 = document.querySelector('#dropdown1');
const dropdown2 = document.querySelector('#dropdown2');
const dropdown3 = document.querySelector('#dropdown3');

const baseURL = 'http://localhost:3000';
let ridersURL = `${baseURL}/riders`;

if (resortQuery){
  ridersURL = `${ridersURL}?resort=${resortQuery}`;
}

if (dateQuery){
  ridersURL = `${ridersURL}?date=${dateQuery}`;
}

if (passQuery){
  ridersURL = `${ridersURL}?pass=${passQuery}`;
}

fetch(ridersURL)
  .then(response => response.json())
  .then(showRiders)

fetch(ridersURL)
  .then(response => response.json())
  .then(showRiderOptions) 

  const ridersList = document.getElementById('riders-list')

  function showRiders(riders){
    riders.forEach(rider => {
      let li = document.createElement('li')
      li.innerHTML = `<a href='driverShow.html?id=${rider.id}'>${rider.name}</a> 
                      is going to ${rider.resort} at
                      ${cleanUpDate(rider.time)}`
      ridersList.appendChild(li)
    })
  }

  function cleanUpDate(date) {
    date = Date(Date.parse(date))
    date = date.split('(')
    return date[0]
  }

  function showRiderOptions(riders){
    addTimeOption(dropdown2)
    riders.forEach(rider => {
      addOption(rider.resort, dropdown1)
      addOption(rider.pass, dropdown3)
    })
  }

  function addOption(element, dropdown) {
    let option = document.createElement('option')
    option.innerText = element
    option.value = element
    dropdown.appendChild(option)
  }

  function addTimeOption(dropdown){
    let option = document.createElement('option')
    option.innerText = "Ascending"
    option.value = "asc"
    console.log(dropdown)
    dropdown.appendChild(option)
    option = document.createElement('option')
    option.innerText = "Descending"
    option.value = "desc"
    console.log(dropdown)
    dropdown.appendChild(option)
  }

