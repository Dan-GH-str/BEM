import { slider } from "../slider/slider.js"

export default function createPortfolio() {
    const gallery = [
        {src: "./img/portfolio-work.jpg", type: "branding", title: "Lorem ipsum dolor sit.", description: "Lorem, ipsum dolor."},
        {src: "./img/portfolio-work.jpg", type: "branding", title: "Lorem ipsum dolor sit.", description: "Lorem, ipsum dolor."},
        {src: "./img/portfolio-work.jpg", type: "branding", title: "Lorem ipsum dolor sit.", description: "Lorem, ipsum dolor."},
        {src: "./img/portfolio-work.jpg", type: "branding", title: "Lorem ipsum dolor sit.", description: "Lorem, ipsum dolor."},
        {src: "./img/portfolio-work.jpg", type: "photography", title: "Lorem ipsum dolor sit.", description: "Lorem, ipsum dolor."},
        {src: "./img/portfolio-work.jpg", type: "photography", title: "Lorem ipsum dolor sit.", description: "Lorem, ipsum dolor."},
        {src: "./img/portfolio-work.jpg", type: "photography", title: "Lorem ipsum dolor sit.", description: "Lorem, ipsum dolor."},
        {src: "./img/portfolio-work.jpg", type: "illustration", title: "Lorem ipsum dolor sit.", description: "Lorem, ipsum dolor."},
        {src: "./img/portfolio-work.jpg", type: "illustration", title: "Lorem ipsum dolor sit.", description: "Lorem, ipsum dolor."}
    ]
    const dataTypeAll = 'all'

    let sideBarItems = allSideBarItemsPattern()
    let mainSlideItems = allMainSlideItemsPattern()

    function allSideBarItemsPattern() {
        return gallery.map(el => {
            return (
                `
                <div class="sliderContainer__sidebar-item portfolio__item_type_${el.type}">
                    <h1 class="sliderContainer__sidebar-item-header">${el.title}</h1>
                    <p class="sliderContainer__sidebar-item-p">${el.description}</p>
                </div>
                `
            )
        })
    }

    function allMainSlideItemsPattern() {
        return gallery.map(el => {
            return (
                `
                <div
                    class="sliderContainer__main-slide-item"
                    style="
                    background-image: url(${el.src});
                    "
                ></div>
                `
            )
        })
    }

    const insertWorks = () => {
        $('.sliderContainer').empty().append((
            `
            <div class="sliderContainer__sidebar">   
                ${sideBarItems.join('\n')}
            </div>
            <div class="sliderContainer__main-slide">
                ${mainSlideItems.join('\n')}
            </div>
            <div class="sliderContainer__controls">
                <button class="sliderContainer__down-button sliderContainer__button">
                    <i class="fas fa-arrow-down"></i>
                </button>
                <button class="sliderContainer__up-button sliderContainer__button">
                    <i class="fas fa-arrow-up"></i>
                </button>
            </div>
            `
        ))

        slider()
    }

    // Сортировка работ
    $('.portfolio__nav').click((e) => {
        if (e.target.nodeName === 'LI') {
            // Убрать подчеркивание при нажатии на элемент меню
            $('.portfolio__nav-item').removeClass('portfolio__nav-item_active')
            // Добавить подчеркивание при нажатии на элемент меню
            $(e.target).addClass('portfolio__nav-item_active')

            sideBarItems = e.target.dataset.type === dataTypeAll
            ? 
            allSideBarItemsPattern() 
            :
            gallery.map(el => {
                if (el.type === e.target.dataset.type) return (
                    `
                    <div class="sliderContainer__sidebar-item portfolio__item_type_${el.type}">
                        <h1 class="sliderContainer__sidebar-item-header">${el.title}</h1>
                        <p class="sliderContainer__sidebar-item-p">${el.description}</p>
                    </div>
                    `
                )
            })

            mainSlideItems = e.target.dataset.type === dataTypeAll
            ?
            allMainSlideItemsPattern()
            :
            gallery.map(el => {
                if (el.type === e.target.dataset.type) return (
                    `
                    <div
                        class="sliderContainer__main-slide-item"
                        style="
                        background-image: url(${el.src});
                        "
                    ></div>
                    `
                )
            }) 
            
            insertWorks()
        }
    })

    insertWorks()
}