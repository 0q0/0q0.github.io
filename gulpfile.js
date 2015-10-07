var gulp = require('gulp');
//https://www.npmjs.com/package/gulp-minify-html
var minifyHTML = require('gulp-minify-html');

//https://www.npmjs.com/package/gulp-minify-css
var minifyCss = require('gulp-minify-css');

var htmlOpt = {
  conditionals: true,
  spare:true,
  empty: true,
  quotes: true
};

// HTML Task
gulp.task('html', function() {
  
  return gulp.src('index.html')
    .pipe(minifyHTML(htmlOpt))
    .pipe(gulp.dest('min'));

});

// Styles Task
gulp.task('css', function() {
    return gulp.src('dev.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('min'));
});


// Watch Task
// gulp.task('watch', function() {
//     gulp.watch('app/js/*.js', ['htmls']);
//     gulp.watch('app/css/*.css', ['styles']);
//     gulp.watch('app/js/*.js', ['scripts']);
// });

// Default Task
gulp.task('default', ['html', 'css']);
