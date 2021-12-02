const wrapper = document.getElementById('wrapperDIV')
const cardComponent = document.querySelector('.card-component')
const totalCards = Array.from(document.querySelectorAll('.card-component'))
const nextButton = document.querySelector('[data-next-btn]')
const prevButton = document.querySelector('[data-prev-btn]')
const navBars = document.querySelectorAll('.nav-bars button')

let currentCard = 0;

let cardDimensions = cardComponent.getBoundingClientRect();
let cardWidth = cardDimensions.width;



nextButton.addEventListener('click', () => {
    wrapper.scrollLeft += cardWidth + 25.6;
    showNextCard()
})

prevButton.addEventListener('click', () => {
    wrapper.scrollLeft -= cardWidth + 25.6;
    showPreviousCard ()
})

function showNextCard () {
    if (currentCard === totalCards.length - 1) return
    else {
        currentCard++
    }

    lineIndicator(currentCard + 1)
}

function showPreviousCard () {
    if (currentCard === 0) return 
    else {
        currentCard--
    }
    lineIndicator(currentCard + 1)
}

function lineIndicator(number) {
    navBars.forEach(item => {
        item.style.backgroundColor = 'rgb(150, 150, 150)'
    })

    document.querySelector('.nav-bars button:nth-child(' + number + ')').style.backgroundColor = 'rgb(20, 128, 104)'
}
