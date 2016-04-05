var gulp        = require('gulp');
var jade        = require('gulp-jade');
var gulpsync    = require('gulp-sync')(gulp);
var server      = require( 'gulp-develop-server' );
var webpack     = require('webpack');
var webpackConfig = require('./webpack.config');
var rimraf      = require('rimraf');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var stream = require('webpack-stream');
var uglify = require('gulp-uglify');
//var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
var path = {
    ALL: ['app/client/**/*.ts'],
    views: 'app/client/**/*.jade'
};
gulp.task('clean', function (cb) {
    rimraf('./bundle', cb);
});


// compile all view pages.
gulp.task('views', function() {
    return gulp.src(path.views)
        .pipe(jade())
        .pipe(gulp.dest('bundle/'))
        //.pipe(connect.reload());
});


gulp.task('watch', function() {
    //connect.server({
    //    root: __dirname + '/bundle',
    //    port: 3000,
    //    livereload: true
    //});
    gulp.watch(path.ALL, ['webpack']);
    gulp.watch(path.views, ['views']);
});

gulp.task('webpack', [], function() {
    return gulp.src(['./app/client/app.ts', './app/client/vendor.ts' ])
        .pipe(stream(webpackConfig))
        .pipe(uglify())
        .pipe(gulp.dest('bundle/'))
        //.pipe(connect.reload());
});

// start server.
gulp.task( 'server:start', function() {
    server.listen( { path: './app/www/server' } );
});

gulp.task('default', gulpsync.sync(
    [
        'clean',
        'webpack',
        'views',
        'server:start',
        'watch'
    ]
));


