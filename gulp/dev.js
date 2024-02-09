const gulp = require('gulp')
const fileInclude = require('gulp-file-include')

const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')

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

gulp.task('clean:dev', function (done) {
    if (fs.existsSync('./build/')) {
        return gulp
            .src('./build/', { read: false })
            .pipe(clean({ force: true }))
    }

    done()
})

gulp.task('html:dev', function () {
    return gulp.src('./src/*.html')
        .pipe(changed('./src/*.html'))
        .pipe(plumber(plumberNotify('HTML')))
        .pipe(fileInclude(fileIncludeSettings))
        .pipe(gulp.dest('./build/'))
})

gulp.task('sass:dev', function () {
    return gulp.src('./src/styles/*.scss')
        .pipe(changed('./src/styles/*.scss'))
        .pipe(plumber(plumberNotify('SASS')))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./build/styles/'))
})

gulp.task('images:dev', function () {
    return gulp.src('./src/img/**/*')
        .pipe(changed('./src/img/**/*'))
        .pipe(gulp.dest('./build/img/'))
})

gulp.task('js:dev', function () {
    return gulp.src('./src/js/*.js')
        .pipe(changed('./src/js/*.js'))
        .pipe(plumber(plumberNotify('JS')))
        .pipe(webpack(require('../webpack.config')))
        .pipe(gulp.dest('./build/js/'))
})

gulp.task('server:dev', function () {
    return gulp.src('./build/')
        .pipe(server(serverOptions))
})

gulp.task('watch:dev', function () {
    gulp.watch('./src/*.html', gulp.parallel('html:dev'))
    gulp.watch('./src/common.blocks/**/*.scss', gulp.parallel('sass:dev'))
    gulp.watch('./src/img/**/*', gulp.parallel('images:dev'))
    gulp.watch(['./src/common.blocks/**/*.js', './src/js/*.js'], gulp.parallel('js:dev'))
})

