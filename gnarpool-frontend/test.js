const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')


const baseURL = 'http://localhost:3000';


let ridersURL = `${baseURL}/riders/${id}`;

fetch(ridersURL)
    .then(response => response.json())
    .then(result => logit(result))

function logit(data){
    console.log(data)
}
