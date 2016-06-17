var gulp = require ('gulp');
var stylus = require ('gulp-stylus');
var autoprefixer = require ('gulp-autoprefixer');
var rename = require ('gulp-rename');
// var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var nib = require('nib');
// rjs = require('gulp-requirejs');
    //////////////////////////////
    // compila los archivos .styl
    //////////////////////////////
    gulp.task('styles', function () {
      gulp.src('styles/*.styl')
        .pipe(sourcemaps.init())
        .pipe(stylus({
          paths:  ['node_modules', 'styles/globals'],
          import: ['jeet/stylus/jeet', 'stylus-type-utils', 'nib', 'rupture/rupture', 'variables', 'mixins'],
          use: [nib()],
          'include css': true
        }))
        .pipe(gulp.dest('css'))
    });
    ///////////////////////////
    //Compila archivos .js   //
    //////////////////////////
    
    //////////////////////////////
    // observa los cambios hechos dentro de las carpetas espef¡cificadas y corre la tarea 'styles'
    //////////////////////////////
    gulp.task('watch', function () {
      gulp.watch('styles/globals/**/*.styl', ['styles']);
        gulp.watch('styles/**/*.styl', ['styles']);
    });
