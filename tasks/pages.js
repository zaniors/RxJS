import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args'

gulp.task('pages', () => {
    var stream = gulp.src('app/**/*.ejs');
    stream.pipe(gulp.dest('server'))
    .pipe(gulpif(args.watch, livereload()));
    return stream;
})