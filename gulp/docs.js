const gulp = require('gulp')

// HTML
const fileInclude = require('gulp-file-include')
const htmlclean = require('gulp-htmlclean')

// SASS
const sass = require('gulp-sass')(require('sass'))
const groupMedia = require('gulp-group-css-media-queries')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const csso = require('gulp-csso')

// Images
const webp = require('gulp-webp')
const webpHtml = require('gulp-webp-html')
const webpCss = require('gulp-webp-css')

const server = require('gulp-server-livereload')
const clean = require('gulp-clean')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const webpack = require('webpack-stream')
const changed = require('gulp-changed')

const fs = require('fs')

const fileIncludeSettings = {
    prefix: '@@',
    basepath: '@file'
}

const serverOptions = {
    livereload: true,
    open: true
}

const plumberNotify = (title) => {
    return {
        errorhandler: notify.onError({
            title,
            message: '<%= error.message %>',
            sound: false
        })
    }
}

gulp.task('clean:docs', function (done) {
    if (fs.existsSync('./docs/')) {
        return gulp
            .src('./docs/', { read: false })
            .pipe(clean({ force: true }))
    }

    done()
})

gulp.task('html:docs', function () {
    return gulp.src('./src/*.html')
        .pipe(changed('./src/*.html'))
        .pipe(plumber(plumberNotify('HTML')))
        .pipe(fileInclude(fileIncludeSettings))
        .pipe(webpHtml())
        .pipe(htmlclean())
        .pipe(gulp.dest('./docs/'))
})

gulp.task('sass:docs', function () {
    return gulp.src('./src/styles/*.scss')
        .pipe(changed('./src/styles/*.scss'))
        .pipe(plumber(plumberNotify('SASS')))
        .pipe(sourcemaps.init())
        .pipe(webpCss())
        .pipe(groupMedia())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(csso())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./docs/styles/'))
})

gulp.task('images:docs', function () {
    return gulp.src('./src/img/**/*')
        // Перенос webp изображений
        .pipe(changed('./src/img/**/*'))
        .pipe(webp())
        .pipe(gulp.dest('./docs/img/'))

        // Перенос самих картинок
        .pipe(gulp.src('./src/img/**/*'))
        .pipe(changed('./src/img/**/*'))
        .pipe(gulp.dest('./docs/img/'))
})

gulp.task('js:docs', function () {
    return gulp.src('./src/js/*.js')
        .pipe(changed('./src/js/*.js'))
        .pipe(plumber(plumberNotify('JS')))
        .pipe(webpack(require('../webpack.config')))
        .pipe(gulp.dest('./docs/js/'))
})

gulp.task('server:docs', function () {
    return gulp.src('./docs/')
        .pipe(server(serverOptions))
})

gulp.task('watch:docs', function () {
    gulp.watch('./src/*.html', gulp.parallel('html:docs'))
    gulp.watch('./src/common.blocks/**/*.scss', gulp.parallel('sass:docs'))
    gulp.watch('./src/img/**/*', gulp.parallel('images:docs'))
    gulp.watch(['./src/common.blocks/**/*.js', './src/js/*.js'], gulp.parallel('js:docs'))
})