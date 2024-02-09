export function slider() {
    const upBtn = document.querySelector('.sliderContainer__up-button')
    const downBtn = document.querySelector('.sliderContainer__down-button')
    const sideBar = document.querySelector('.sliderContainer__sidebar')
    const mainSlide = document.querySelector('.sliderContainer__main-slide')
    const slidesCount = mainSlide.querySelectorAll('div').length
    let activeSlideIndex = 0

    sideBar.style.top = `-${(slidesCount - 1) * 100}vh`

    upBtn.addEventListener('click', () => {
        changeSlide('up')
    })

    downBtn.addEventListener('click', () => {
        changeSlide('down')
    })

    document.addEventListener('keydown', event => {
        if (event.key === 'ArrowUp') {
            changeSlide('up')
        } else if (event.key === 'ArrowDown') {
            changeSlide('down')
        }
    })

    function changeSlide(direction) {
        if (direction === 'up') {
            activeSlideIndex++
            if (activeSlideIndex === slidesCount) {
                activeSlideIndex = 0
            }
        } else if (direction === 'down') {
            activeSlideIndex--
            if (activeSlideIndex < 0) {
                activeSlideIndex = slidesCount - 1
            }
        }

        mainSlide.style.transform = `translateY(-${activeSlideIndex * 100}vh)`
        sideBar.style.transform = `translateY(${activeSlideIndex * 100}vh)`
}
}