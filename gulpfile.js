"use strict";

const {src, dest, watch} = require("gulp");
const browserSync = require("browser-sync").create();
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const sass = require("gulp-sass");

// Compile sass into CSS & auto-inject into browsers
 function serveSass() {
    return src("./src/sass/*.sass")
        .pipe(sass())
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
  minCss();
  browserSync.init({
    server: {
      baseDir: "./src",
    },
  });
  watch("./src/*.html").on("change", browserSync.reload);
  watch("./src/sass/**/*.sass", serveSass);
  watch("./js/*.js");
}

exports.serve = bs;