export default function createMenu () {
    $('.menu__list').click((e) => {
        if (e.target.nodeName === 'A') {
            // Поставить блокировку для того, чтобы при клике на ссылку не срабатывал observer
            locked = true
            // Убрать подчеркивание при нажатии на ссылку
            $('.menu__link').removeClass('menu__link_active')
            // Добавить подчеркивание при нажатии на ссылку
            $(e.target).addClass('menu__link_active')

            setTimeout(() => {
                locked = false
            }, 300)
            
        }
    })

    let locked = false

    let observerOptions = {
        rootMargin: '0px',
        threshold: 0.5
    }
    
    function observerCallback(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (locked) return
                
                $('.menu__link').each((_, el) => {
                    // Находим ссылку, которая соотвествует наблюдаемому элементу
                    if (entry.target.id === el.hash.slice(1)) {
                        // Если наблюдаем элемент на экране, а соответсвующая ему ссылка уже активна, то ничего не происходит
                        if (el.classList.contains('menu__link_active')) {
                            return
                        }
    
                        $('.menu__link_active').removeClass('menu__link_active')
                        $(el).addClass('menu__link_active')
                    }
                })
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    let target = '.anchor';
    document.querySelectorAll(target).forEach((i) => {
        if (i) {
            observer.observe(i);
        }
    });
}


