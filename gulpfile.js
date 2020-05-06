"use strict";

const {src, dest, watch} = require("gulp");
const browserSync = require("browser-sync").create();
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const sass = require("gulp-sass");

// Compile sass into CSS & auto-inject into browsers
 function serveSass() {
    return src("./sass/*.sass")
        .pipe(sass())
        .pipe(dest("app/css"))
        .pipe(browserSync.stream());
}

// Static server
function bs() {
  browserSync.init({
    server: {
      baseDir: "./src",
    },
  });
  watch("./src/*.html").on("change", browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./js/*.js");
}

// minify css
function minCss() {
return  src("./src/style/*.css")
  .pipe(cleanCSS())
  .pipe(rename({ suffix: ".min" }))
  .pipe(dest("dist/style"));
}



exports.serve = bs;