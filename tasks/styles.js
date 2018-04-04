import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args'

gulp.task('styles', () => {
    var stream = gulp.src('app/**/*.css');
    stream.pipe(gulp.dest('server/public'))
    return stream;
})