import { changingImage } from './htmlElements.js'
import { listImages } from './listImages.js'

document.addEventListener('click', event => {
  const img = changingImage()
  const span = document.querySelector('span')
  const images = listImages()
  
  if(event.target.id === 'silver') {
    img.setAttribute('src', images[4])
  }

  if(event.target.id === 'green') {
    img.setAttribute('src', images[3])
  }

  if(event.target.id === 'golden') {
    img.setAttribute('src', images[1])
  }

  if(event.target.id === 'grafite') {
    img.setAttribute('src', images[2])
  }

  if(event.target.id === 'blue') {
    img.setAttribute('src', images[0])
  }
  
})