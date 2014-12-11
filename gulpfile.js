var gulp = require('gulp-help')(require('gulp'));
var del = require('del');

gulp.task('clean:build', 'clean build target directories', function (cb) {
  del([
    'SMPDomain/bin/**',
    'SMPDomain/obj/**'
    ], cb);
  });

gulp.task('clean:test', 'clean test results', function (cb) {
  del([
    'TestResults/**',
    'TestResults.xml'
    ], cb);
  });

gulp.task('clean', 'clean all', ['clean:build', 'clean:test']);
