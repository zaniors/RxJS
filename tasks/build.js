import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

gulp.task('build', gulpSequence('clean', 'styles', 'pages', 'scripts', ['browser', 'serve'])); 