var gulp = require('gulp-help')(require('gulp'));
var del = require('del');

gulp.task('clean', 'clean build target directories', function (cb) {
  del([
    'SMPDomain/bin/**',
    'SMPDomain/obj/**'
    ], cb);
});
