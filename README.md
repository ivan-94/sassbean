# sassbean
sass helpful mixins and functions 

## Install 
```
npm i sassbean
```

## Import
```
  var gulp = require('gulp')
  var sass = require('gulp-sass')
  var path = require('path')
  
  gulp.task('sass',function (){
    gulp.src('./sass/**/*.scss')
    .pipe(sass({includePaths: path.dirname(require.resolve('sassbean'))}))
    .pipe(gulp.dest('./css'))
  })
```

## Test
```
  npm test
```
