var gulp = require('gulp-help')(require('gulp'));
var del = require('del');

gulp.task('clean:build', 'clean build target directories', function (cb) {
  del([
    'SMPDomain/bin/**',
    'SMPDomain/obj/**',
    'bin/**'
    ], cb);
  });

gulp.task('clean:packages', 'clean packages', function (cb) {
  del([
    'packages/**'
    ], cb);
  });

gulp.task('clean:test', 'clean test results', function (cb) {
  del([
    'TestResults/**',
    'TestResults.xml'
    ], cb);
  });

gulp.task('clean', 'clean all', ['clean:packages', 'clean:build', 'clean:test']);
