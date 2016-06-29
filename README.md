# sass-helpers
sass helpful mixins and functions 

## Install 
```
npm i sass-helpers
```

## Import
```
  var gulp = require('gulp')
  var sass = require('gulp-sass')
  var path = require('path')
  
  gulp.task('sass',function (){
    gulp.src('./sass/**/*.scss')
    .pipe(sass({includePaths: path.dirname(require.resolve('sass-helpers'))}))
    .pipe(gulp.dest('./css'))
  })
```

