export function createHorizontslSlider(element, items = []) {
    const slidesCount = items.length
    let activeSlideIndex = 0

    const itemInfo = items.map(item => {
        return `
        <div class="horizontal-slider__info-item">
            <h1 class="horizontal-slider__info-header">${item.header}</h1>
            <p class="horizontal-slider__info-body p-text">${item.text}</p>
        </div>`
    })
    const pagination = items.map((_, index) => {
        let modifier = index === 0 ? "horizontal-slider__slide-index_active" : ""
        return `<div class="horizontal-slider__slide-index ${modifier}" data-index="${index}"></div>`
    })

    const horizontalSlider = (
        `
        <div class="horizontal-slider">
            <div class="horizontal-slider__info">
                ${itemInfo.join('\n')}
            </div>
            <div class="horizontal-slider__pagination">
                ${pagination.join('\n')}
            </div>
            <button class="horizontal-slider__angle-right horizontal-slider__button">
                <i class="fa fa-angle-right fa-2x"></i>
            </button>
            <button class="horizontal-slider__angle-left horizontal-slider__button">
                <i class="fa fa-angle-left fa-2x"></i>
            </button>
        </div>
        `
    )

    element.insertAdjacentHTML("beforeend", horizontalSlider)

    const sliderInfo = document.querySelector('.horizontal-slider__info')
    const leftBtn = document.querySelector('.horizontal-slider__angle-left')
    const rightBtn = document.querySelector('.horizontal-slider__angle-right')
    const slideIndexes = document.querySelectorAll('.horizontal-slider__slide-index')
    const $pagination = document.querySelector('.horizontal-slider__pagination')

    const changeSlide = (direction, step = 1) => {
        slideIndexes[activeSlideIndex].classList.remove('horizontal-slider__slide-index_active')

        if (direction === 'right') {
            activeSlideIndex += step
            if (activeSlideIndex === slidesCount) {
                activeSlideIndex = 0
            }
        } else if (direction === 'left') {
            activeSlideIndex -= step
            if (activeSlideIndex === -1) {
                activeSlideIndex = slidesCount - 1
            }
        }
        
        sliderInfo.style.transform = `translateX(-${activeSlideIndex * 100}vw)`

        slideIndexes[activeSlideIndex].classList.add('horizontal-slider__slide-index_active')
    }

    
    leftBtn.addEventListener('click', () => changeSlide('left'))
    rightBtn.addEventListener('click', () => changeSlide('right'))
    $pagination.addEventListener('click', (e) => {
        if (e.target.classList.contains('horizontal-slider__slide-index')) {
            let direction = '';
            const step = parseInt(e.target.dataset.index) - activeSlideIndex
            if (step > 0) {
                direction = 'right' 
            } else if (step < 0) {
                direction = 'left'
            }

            changeSlide(direction, Math.abs(step))
        }
    })
}