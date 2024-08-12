function carousel() {
  const buildPage = function() {
    const slides = document.getElementById('slides')
    const content = document.getElementById('content')
  
    // show first image
    slides.children[0].classList.add('visible')
  
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

  const addNavDots = function() {
    const content = document.getElementById('content')
    const navDotGroup = document.createElement('div')
    navDotGroup.classList = 'nav-dot-group'
    const slides = document.getElementsByClassName('slide')
    for(let i = 0; i < slides.length; i++){
      const navDot = document.createElement('button')
      navDot.classList = 'nav-dot'
      navDot.dataset.slideId = i
      navDotClick(navDot)
      navDotGroup.append(navDot)
    }
    content.append(navDotGroup)
    navDotHighlight()
  }()

  function navDotClick(button) {
    const slides = document.getElementsByClassName('slide')
    button.addEventListener('click', () => {
      const targetSlide = slides[button.dataset.slideId]
      removeVisibleFromAll()
      targetSlide.classList.add('visible')
      navDotHighlight()
    })

    function removeVisibleFromAll() {
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('visible')
      }
    }
  }

  function navDotHighlight() {
    const slides = document.getElementsByClassName('slide')
    const navDots = document.getElementsByClassName('nav-dot')
    for(let i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains('visible')) {
        navDots[i].classList.add('filled')
      } else {
        navDots[i].classList.remove('filled')
      }
    }
  }
  
  function navButtonClick(button, direction) {
    if (direction == 'left') {
      button.addEventListener('click', () => {
        for (let i = 0; i < slides.children.length; i++) {
          const child = slides.children[i]
          if (child.classList.contains('visible')) {
            child.classList = 'slide'
            if (i == 0) {
              slides.children[slides.children.length - 1].classList.add('visible')
            } else {
              slides.children[i - 1].classList.add('visible')
            }
            navDotHighlight()
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
              slides.children[0].classList.add('visible')
            } else {
              slides.children[i + 1].classList.add('visible')
            }
            navDotHighlight()
            break
          }
        }
      })
    }
  }

  const advanceSlide = async function(time = 5000) {
    const slides = document.getElementsByClassName('slide')
    const rightButton = document.getElementById('right-button')
    // while there are no other clicks start timer to switch
    while (true) {
      await sleep(time)
      rightButton.click()
    }
  }()

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export { carousel }