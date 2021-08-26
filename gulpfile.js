var gulp = require("gulp");
var rename = require("gulp-rename");
var plumber = require("gulp-plumber");
var sass = require("gulp-sass");
var sassGlob = require("gulp-sass-glob");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano");
var sourcemap = require("gulp-sourcemaps");
var twig = require("gulp-twig2html");
var rimraf = require("rimraf");
var webpack = require("webpack-stream");
var devserver = require("browser-sync");

// twig Compiler
gulp.task("twig", function () {
  return gulp
    .src(["src/views/**/*.twig", "!src/views/**/_*.twig"])
    .pipe(plumber())
    .pipe(twig({}))
    .pipe(rename({ extname: ".html" }))
    .pipe(gulp.dest("dist/html"));
});

// sass compile
gulp.task("sass", function () {
  return gulp
    .src("src/scss/index.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sassGlob())
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )
    .pipe(
      postcss([
        autoprefixer({
          flexbox: true,
          grid: "autoplace",
        }),
        cssnano(),
      ])
    )
    .pipe(sourcemap.write())
    .pipe(gulp.dest("dist/css"));
});

// sass compiler (minify)
gulp.task("sass-production", function () {
  return gulp
    .src("src/scss/index.scss")
    .pipe(plumber())
    .pipe(sassGlob())
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(
      postcss([
        autoprefixer({
          flexbox: true,
          grid: "autoplace",
        }),
        cssnano(),
      ])
    )
    .pipe(gulp.dest("dist/css"));
});

// Js packaging for local builds
var webpackLocalConfig = require("./webpack.config.local");
gulp.task("webpack-local", function () {
  return webpack(webpackLocalConfig).pipe(gulp.dest("dist/js"));
});

// Development js packaging
var webpackDevConfig = require("./webpack.config");
gulp.task("webpack-dev", function () {
  return webpack(webpackDevConfig).pipe(gulp.dest("dist/js"));
});

// Production js packaging
var webpackProdConfig = require("./webpack.config.production");
gulp.task("webpack-prod", function () {
  return webpack(webpackProdConfig).pipe(gulp.dest("dist/js"));
});

// Clean up the dist directory
gulp.task("clean", function (cb) {
  rimraf("dist", cb);
});

// Image system copy
gulp.task("copy-images", function () {
  return gulp.src(["src/img/**/*.*"]).pipe(gulp.dest("dist/img"));
});

// Font copy
// Note that it is a relative path to the CSS directory
gulp.task("copy-fonts", function () {
  return gulp
    .src(["src/fonts/*.ttf", "src/fonts/*", "src/fonts/*/*"])
    .pipe(gulp.dest("dist/webfonts"));
});

//copying slick carousel
gulp.task("copy-slick", function () {
  return gulp.src("src/slick/slick/*.*").pipe(gulp.dest("dist/slick"));
});

// Local build
gulp.task(
  "local-build",
  gulp.series(
    "clean",
    "twig",
    "sass",
    "webpack-local",
    "copy-images",
    "copy-fonts",
    "copy-slick"
  ),
  function () {}
);
// Dev build
gulp.task(
  "dev-build",
  gulp.series(
    "clean",
    "twig",
    "sass",
    "webpack-dev",
    "copy-images",
    "copy-fonts",
    "copy-slick"
  ),
  function () {}
);
// Production build
gulp.task(
  "prod-build",
  gulp.series(
    "clean",
    "twig",
    "sass-production",
    "webpack-prod",
    "copy-images",
    "copy-fonts",
    "copy-slick"
  ),
  function () {}
);

// Start development server
// This is an option
const serveoptions = {
  server: {
    baseDir: "./dist",
    index: "html/index.html",
    serveStaticOptions: {
      extensions: ["html"],
    },
  },
};
const httpserver = devserver.create();

gulp.task("browser-reload", function (cb) {
  httpserver.reload();
  cb();
});

function watch(cb) {
  gulp.watch("src/js/**/*.js", gulp.series("webpack-local", "browser-reload"));
  gulp.watch("src/scss/**/*.scss", gulp.series("sass", "browser-reload"));
  gulp.watch("src/views/**/*.twig", gulp.series("twig", "browser-reload"));
  gulp.watch("src/img/**/*.*", gulp.series("copy-images", "browser-reload"));
  httpserver.init(serveoptions);
}

module.exports.serve = gulp.series("local-build", watch);
