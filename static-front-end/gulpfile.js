var gulp = require('gulp');
//plugins
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
//path
var paths = {
    html_file:'./*.html',
    source_file:['./*','./*/*','./*/*/*'],
    scss_file:'./scss/*.scss',
    css_folder:'./css'
}
gulp.task('sass', function(){
    gulp.src(paths.scss_file)
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest(paths.css_folder))
});
gulp.task('page', function () {
  gulp.src(paths.source_file)
    .pipe(connect.reload());
});
gulp.task('webserver', function(){
    connect.server({
        port: 8081,
        livereload:true
    });
});
gulp.task('watch',function(){
    gulp.watch(paths.scss_file,['sass']);
    gulp.watch(paths.source_file,['page']);
});
gulp.task('default',['sass','webserver','watch']);