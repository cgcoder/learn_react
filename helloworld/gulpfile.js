var gulp = require('gulp');
var react = require('gulp-react');

var js_files = ['js/*.js'];
var DEST = 'dist';

gulp.task('default', defaultTask);

gulp.task('transform', function(done) {
  gulp.src(js_files)
    .pipe(react())
    .pipe(gulp.dest(DEST));

  done();
});

function defaultTask(done) {
  done();
  console.log("Done!");
}
