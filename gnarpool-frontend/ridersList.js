const searchParams = new URLSearchParams(window.location.search);//

const resortQuery = searchParams.get('resort');//
const dateQuery = searchParams.get('date');//
const passQuery = searchParams.get('pass');//

const dropdown1 = document.querySelector('#dropdown1');//
const dropdown2 = document.querySelector('#dropdown2');//
const dropdown3 = document.querySelector('#dropdown3');//

const baseURL = 'http://localhost:3000';//
let ridersURL = `${baseURL}/riders`;//

if (resortQuery){//
  ridersURL = `${ridersURL}?resort=${resortQuery}`;//
}//

if (dateQuery){//
  ridersURL = `${ridersURL}?date=${dateQuery}`;//
}//

if (passQuery){//
  ridersURL = `${ridersURL}?pass=${passQuery}`;//
}//

fetch(ridersURL)//
  .then(response => response.json())//
  .then(showRiders)//

fetch(ridersURL)//
  .then(response => response.json())//
  .then(showRiderOptions) //

  const ridersList = document.getElementById('riders-list')//

  function showRiders(riders){//
    riders.forEach(rider => {//
      let li = document.createElement('li')//
      li.innerHTML = `<a href='riderShow.html?id=${rider.id}'>${rider.name}</a>`//
      ridersList.appendChild(li)//
    })//
  }//

  function showRiderOptions(riders){//
    riders.forEach(rider => {//
      addOption(rider.resort, dropdown1)//
      addOption(rider.date, dropdown2)//
      addOption(rider.pass, dropdown3)//
    })//
  }//

  function addOption(element, dropdown) {//
    let option = document.createElement('option')//
    option.innerText = element//
    option.value = element//
    dropdown.appendChild(option)//
  }//

