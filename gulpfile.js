"use strict";

const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const cleanCSS = require("gulp-clean-css");

gulp.task("hello", function (done) {
  console.log("Привет, Мир!");
  done();
});

// Static server
gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "./src",
    },
  });
  gulp.watch("./src*.html").on("change", browserSync.reload);
});

// minify css
gulp.task("minify-css", () => {
return gulp.src("./src/style/*.css")
  .pipe(cleanCSS())
  .pipe(gulp.dest("dist"));
});

