// Code your solution here
const shoesUrl = `http://localhost:3000/shoes`
const shoesUl = document.querySelector('#shoe-list')
const newLi = document.createElement('li')
const image = document. querySelector('#shoe-image')
const formDiv = document.querySelector('#form-container')
const shoeDiv = document.querySelector('#main-shoe')
const h4 = document.querySelector('.card-title')
const p1 = document.querySelector('.card-text')
const p2 = document.querySelector('#shoe-price')

// console.log(h4)
// console.log(shoesUl)
// debugger
fetch(shoesUrl)
.then(r => r.json())
.then(shoeArr => shoeArr.forEach(shoe => generateShoe(shoe)))

// .then(console.log)

function generateShoe(shoe) {
newLi.className = 'list-group-item'
newLi.innerText = shoe.name


shoesUl.append(newLi)
}

function generateShoeCard(shoe) {
  h4.innerText = shoe.name
  p1.innerText = shoe.description
  p2.innerText = shoe.price
  image.src = shoe.image

  shoeDiv.append(h4, p1, p2, image)
}

function createForm(shoe) {
const form = document.createElement('form')
form.id = 'new-review'
const newFormDiv = document.createElement('div')
newFormDiv.className = 'form-group'
const textArea = document.createElement('textarea')
textArea.className = 'form-control'
textArea.id = 'review-content'


}

// generateShoeCard(shoe)
