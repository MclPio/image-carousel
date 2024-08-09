import './assets/css/style.css';
import Joshua from './assets/images/joshua-tree1.jpg'
import Michal from './assets/images/michal-tree2.jpg'
import Nolla from './assets/images/nolla-tree3.jpg'
import Theo from './assets/images/theo-tree4.jpg'

const joshua = document.getElementById('joshua')
joshua.src = Joshua

const michal = document.getElementById('michal')
michal.src = Michal

const theo = document.getElementById('theo')
theo.src = Theo

const nolla = document.getElementById('nolla')
nolla.src = Nolla

// above is unrelated code to import test images
const buildPage = function() {
  const slides = document.getElementById('slides')
  const content = document.getElementById('content')

  // show first image
  slides.children[0].classList = 'visible'

  const leftButton = document.createElement('button')
  leftButton.innerText = '<'
  leftButton.id = 'left-button'

  const rightButton = document.createElement('button')
  rightButton.innerText = '>'
  rightButton.id = 'right-button'

  const buttons = document.createElement('div')
  buttons.classList = 'buttons'
  buttons.append(leftButton, rightButton)

  content.append(buttons)
}()

const changeImage = function() {
  // listen for click on either left or right button
  // if left is clicked go to previous image if it exists else go to last image
  //if right is pressed go to next image, if it does not exist, go to first image
  const slides = document.getElementById('slides')
  const rightButton = document.getElementById('right-button')
  const leftButton = document.getElementById('left-button')

  navButtonClick(rightButton, 'right')
  navButtonClick(leftButton, 'left')
}()

function navButtonClick(button, direction) {
  if (direction == 'left') {
    button.addEventListener('click', () => {
      for (let i = 0; i < slides.children.length; i++) {
        const child = slides.children[i]
        if (child.classList.contains('visible')) {
          child.classList = 'slide'
          if (i == 0) {
            slides.children[slides.children.length - 1].classList = 'visible'
          } else {
            slides.children[i - 1].classList = 'visible'
          }
          break
        }
      }
    })
  } else if (direction == 'right') {
    button.addEventListener('click', () => {
      for (let i = 0; i < slides.children.length; i++) {
        const child = slides.children[i]
        if (child.classList.contains('visible')) {
          child.classList = 'slide'
          if (i == slides.children.length - 1) {
            slides.children[0].classList = 'visible'
          } else {
            slides.children[i + 1].classList = 'visible'
          }
          break
        }
      }
    })
  }
}