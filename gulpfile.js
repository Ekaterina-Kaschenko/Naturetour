var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static server
gulp.task('serve', ['scripts', 'sass'], function() {
  gulp.watch('./assets/sass/*.scss', ['sass']);
  gulp.watch('./assets/scripts/**/*.js', ['scripts']);
  gulp.watch('*.html').on('change', browserSync.reload);

  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('sass', function() {
  return gulp.src('./assets/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
  return gulp.src('scripts/**/*.js')
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
