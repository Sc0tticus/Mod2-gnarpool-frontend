let dropdown1 = document.querySelector('#dropdown1')
let dropdown2 = document.querySelector('#dropdown2')
let dropdown3 = document.querySelector('#dropdown3')

fetch('http://localhost:3000/riders')
  .then(response => response.json())
  .then(showRiders)

fetch('http://localhost:3000/riders')
  .then(response => response.json())
  .then(showRiderOptions) 

  const driversList = document.getElementById('riders-list')

  function showRiders(riders){
    riders.forEach(rider => {
      
      let li = document.createElement('li')
  
      li.innerHTML = `<a href='driverShow.html?id=${rider.id}'>${rider.name}</a>`
      
      driversList.appendChild(li)
    })
  }

  function showRiderOptions(riders){
    riders.forEach(rider => {
      let option1 = document.createElement('option')
      let option2 = document.createElement('option')
      let option3 = document.createElement('option')

      option1.innerText = rider.resort
      option2.innerText = rider.date
      option3.innerText = rider.pass

      dropdown1.appendChild(option1)
      dropdown2.appendChild(option2)
      dropdown3.appendChild(option3)
    })
  }
