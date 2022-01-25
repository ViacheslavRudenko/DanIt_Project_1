const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const cleaner = require('gulp-clean');
const concat = require('gulp-concat');
const minify = require('gulp-js-minify');
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

