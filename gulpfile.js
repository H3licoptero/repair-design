"use strict";

const {src, dest, watch, series} = require("gulp");
const browserSync = require("browser-sync").create();
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const minify = require("gulp-minify");
const htmlmin = require("gulp-htmlmin");
const tinypng = require("gulp-tinypng-compress");


// Compile sass into CSS & auto-inject into browsers
 function serveSass() {
    return src("./src/sass/**/*.sass", "./src/sass/**/*.scss")
      .pipe(sass())
      .pipe(
        autoprefixer({
          cascade: false,
        })
      )
      .pipe(dest("./src/style"))
      .pipe(browserSync.stream());
}

// minify css
function minCss() {
return src("./src/style/*.css")
  .pipe(cleanCSS())
  .pipe(rename({ suffix: ".min" }))
  .pipe(dest("dist/style"));
}

// Static server
function bs() {
  serveSass();
  // minCss();
  browserSync.init({
    server: {
      baseDir: "./src",
    },
  });
  watch("./src/*.html").on("change", browserSync.reload);
  watch("./src/sass/**/*.sass", serveSass);
  watch("./src/sass/**/*.scss", serveSass);
  watch("./js/*.js");
}

function buildCSS(done) {
  src("./src/style/**.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(dest("dist/style"));
  done();
}

function buildJS(done) {
  src(["./src/js/**.js", "!./src/js/**.min.js"])
    .pipe(
      minify({
        ext: {
          min: ".js",
        },
      })
    )
    .pipe(dest("dist/js"));
  src("./src/js/**.min.js")
    .pipe(dest("dist/js/"));
  done();
}

function buildHTML(done) {
  src("./src/**.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("dist/"));
  done();
}

function buildPHP(done) {
  src("./src/**.php")
    .pipe(dest("dist"));
  src("./src/PHPmailer/**.php")
    .pipe(dest("dist/PHPmailer"));
  done();
}

function buildFonts(done) {
  src("./src/fonts/futura/**")
  .pipe(dest("dist/fonts/futura"));
  done();
}

function buildImg(done) {
  done();
}


exports.serve = bs;
exports.build = series(buildCSS, buildJS, buildHTML, buildPHP, buildFonts);