var gulp = require('gulp'),
    image = require('gulp-image'),
    auto = require('autoprefixer'),
    postcss = require('gulp-postcss');

gulp.task('prefixer', function() {
    gulp.src('src/app/notfound404/*.css')
        /* .src('src/app/about/*.css')
        .src('src/app/events/*.css') */
        .pipe(postcss([auto({browsers: ['last 10 versions']})]))
        /* .pipe(gulp.dest('src/app/home')) */
        .pipe(gulp.dest('src/app/notfound404'))
        /*.pipe(gulp.dest('src/app/events')) */
});


gulp.task('image_task', function() {
    gulp.src('src/assets/img/min/*.png').pipe(image()).pipe(gulp.dest('src/assets/img'));
});

gulp.task('default', ['prefixer']);