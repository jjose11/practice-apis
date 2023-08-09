// const api = document.getElementById('api')

// fetch('https://my-burger-api.herokuapp.com/burgers/')
//   .then(res => {
//     return res.json()
//   })
//   .then(data => {
//     data.forEach(user => {
//       const markup = 
//       `
//       <b>Name</b>: ${user.name}<br>
//       Restaurant: ${user.restaurant}<br>
//       Ingredients: ${user.ingredients}<br><br>
//       `;
//   api.insertAdjacentHTML('beforeend', markup)
//     })
//   })
//   .catch(error => console.log('Err'))



// document.querySelector('ul').insertAdjacentHTML('beforeend', markup)

const url = 'https://my-burger-api.herokuapp.com/burgers/'

async function getData() {
  const request = new Request(url, {
    headers: {
      'Authorization': 'bearer'
      
    }
  })
const response = await fetch(url)
const data = response.json()
console.log(data)
}

getData()




