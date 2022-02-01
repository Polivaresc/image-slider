
const nextButton = document.querySelector('#next')
const previousButton = document.querySelector('#previous')

const allSlides = [...document.querySelectorAll('#image > img')]
const allCircles = [...document.querySelectorAll('.circle')]

let currentImg = allSlides.find(image => image.className = 'current')
let currentIx = allSlides.indexOf(currentImg)
updateNavCircles(currentIx)

nextButton.addEventListener('click', nextSlide)

previousButton.addEventListener('click', previousSlide)


function nextSlide() {
    // const currentIx = currentIndex()
    let nextIx

    if (currentIx === allSlides.length-1) {
        nextIx = 0
    } else {
        nextIx = currentIx+1
    }

    const nextImg = allSlides[nextIx]

    hideSlides()
    nextImg.classList = 'current'

    currentIx = nextIx
    updateNavCircles(currentIx)

    return nextImg
}


function previousSlide() {
    // const currentIx = currentIndex()
    let previousIx

    if (currentIx === 0) {
        previousIx = allSlides.length-1
    } else {
        previousIx = currentIx-1
    }

    const previousImg = allSlides[previousIx]
   
    hideSlides()
    previousImg.classList = 'current'

    currentIx = previousIx
    updateNavCircles(currentIx)

    return previousImg
}


// function currentIndex() {
//     const currentImg = allSlides.find(image => image.className = 'current')
//     return allSlides.indexOf(currentImg)
// }

function hideSlides() {
    allSlides.forEach((slide) => slide.classList = 'hidden')
}

function updateNavCircles(currentIx) {
    allCircles.forEach(circle => circle.classList.remove('full'))

    const currentCircle = allCircles[currentIx]
    currentCircle.classList.add('full')
}