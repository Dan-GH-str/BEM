## BEM

[Демо](https://dan-gh-str.github.io/BEM/)

Верстка сайта по методологии БЭМ. В качестве файловой структуры используется схема Flex (объединение классической схемы Nested и упрощенной схемы Flat):
- Каждому блоку соответствует отдельная директория;
- Элементы и модификаторы реализованы в файлах блока.

Используемый стек технологий: **HTML** + **SCSS** + **JQuery** и сборка с помощью **GULP**.

**HTML:**
- Cемантическая верстка согласно методологии БЭМ.
  
**SCSS:**
- Использование переменных;
- Использование миксинов;
- Вложенные селекторы и медиазапросы (вложенность есть только на уровне файлов scss с помощью селектора &, слежовательно, после сборки в файлах css никакой вложенности не остается, что соотвествует методологии БЭМ);
- Адаптивная верстка.
  
**JQuery:**
- HTML/DOM манипуляции;
- CSS манипуляции;
- HTML event methods.
  
**GULP:**
- 2 версии сборки: development и production;
- Сбор HTML файлов (gulp-file-include);
- Компиляция SCSS (gulp-sass sass);
- Копирование и оптимизация изображений (gulp-webp gulp-webp-html gulp-webp-css);
- Запуск сервера (gulp-server-livereload);
- Слежение за изменениями в файлах (таск watch);
- Исходные карты для CSS (gulp-sourcemaps);
- Группировка медиа-запросов (gulp-group-css-media-queries);
- Обработка ошибок и нотификации (gulp-plumber gulp-notify);
- Сборка js модулей (webpack-stream);
- Ускорение сборки (gulp-changed);
- Автопрефиксы для CSS свойств (autoprefixer);
- Минификация HTML и CSS (gulp-htmlclean gulp-csso).
