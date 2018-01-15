var gulp = require('gulp');
var react = require('gulp-react');

var js_files = ['src/*.js', 'src/*.jsx', 'src/**/*.js', 'src/**/*.jsx'];
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
