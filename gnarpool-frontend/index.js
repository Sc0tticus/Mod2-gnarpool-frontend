fetch('http://localhost:3000/drivers')
  .then(response => response.json())
  .then(showDrivers)

fetch('http://localhost:3000/riders')
  .then(response => response.json())
  .then(showRiders)

  const driversList = document.getElementById('drivers-list')
  const ridersList = document.getElementById('riders-list')

  function showDrivers(drivers){
    console.log(drivers)
    drivers.forEach(driver => {
      
      let li = document.createElement('li')
  
      li.innerHTML = `<a href='driverShow.html?id=${driver.id}'>${driver.name}</a>`
      
      driversList.appendChild(li)
    })
  }

  function showRiders(riders){
    console.log(riders)
    riders.forEach(rider => {
      
      let li = document.createElement('li')
  
      li.innerHTML = `<a href='riderShow.html?id=${rider.id}'>${rider.name}</a>`
      
      ridersList.appendChild(li)
    })
  }

  // function createOptions(powers){
  //   powers.forEach(power => {
  //     let option = document.createElement('option')

  //     option.innerText = power.name 
  //     option.value = power.id

  //     dropdown.appendChild(option)
  //   })
  // }
