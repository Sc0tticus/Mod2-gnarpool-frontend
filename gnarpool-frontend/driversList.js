let dropdown1 = document.querySelector('#dropdown1')
let dropdown2 = document.querySelector('#dropdown2')
let dropdown3 = document.querySelector('#dropdown3')

fetch('http://localhost:3000/drivers')
  .then(response => response.json())
  .then(showDrivers)

fetch('http://localhost:3000/drivers')
  .then(response => response.json())
  .then(showDriverOptions) 

  const driversList = document.getElementById('drivers-list')

  function showDrivers(drivers){
    console.log(drivers)
    drivers.forEach(driver => {
      
      let li = document.createElement('li')
  
      li.innerHTML = `<a href='driverShow.html?id=${driver.id}'>${driver.name}</a>`
      
      driversList.appendChild(li)
    })
  }

  function showDriverOptions(drivers){
    drivers.forEach(driver => {
      let option1 = document.createElement('option')
      let option2 = document.createElement('option')
      let option3 = document.createElement('option')

      option1.innerText = driver.resort
      option2.innerText = driver.date
      option3.innerText = driver.pass

      // option.innerText = power.name 
      // option.value = power.id

      dropdown1.appendChild(option1)
      dropdown2.appendChild(option2)
      dropdown3.appendChild(option3)
    })
  }
