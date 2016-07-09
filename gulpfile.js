var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass');


gulp.task('default', function() {
  gulp.src("./example/*.scss")
  //.pipe(sourcemaps.init())
  .pipe(sass({
    outputStyle: 'expanded'
  }).on('error', sass.logError))
  //.pipe(sourcemaps.write())
  .pipe(gulp.dest('./example/compiled'))
})
