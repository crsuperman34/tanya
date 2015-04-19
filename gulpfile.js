'use strict';
// generated on 2014-10-22 using generator-gulp-webapp 0.1.0
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('styles', function () {
  return gulp.src('app/styles/main.scss')
    .pipe($.plumber())
    .pipe($.rubySass({
      style: 'expanded',
      precision: 10
    }))
    .pipe($.autoprefixer('last 1 version'))
    .pipe(gulp.dest('.tmp/styles'));
});

gulp.task('jshint', function () {
  return gulp.src('app/scripts/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.jshint.reporter('fail'));
});

gulp.task('views', function () {
    return gulp.src(['app/**/*.jade', '!app/jade/*.jade'])
        .pipe($.jade({pretty: true}))
        .pipe(gulp.dest('.tmp'));
});

gulp.task('html', ['styles', 'views'], function () {
  var assets = $.useref.assets({searchPath: '{.tmp,app}'});

  return gulp.src('.tmp/*.html')
    .pipe(assets)
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.csso()))
    .pipe($.rev())
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.revReplace())
    .pipe(gulp.dest('dist'));
});

gulp.task('images', function () {
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', function () {
  return gulp.src(require('main-bower-files')().concat('app/fonts/**/*'))
    .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
    .pipe($.flatten())
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('extras', function () {
  return gulp.src([
    'app/*.*',
    '!app/**/*.jade',
    'node_modules/apache-server-configs/dist/.htaccess'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('clean', require('del').bind(null, ['.tmp', 'dist']));

gulp.task('connect', ['styles'], function () {
  var serveStatic = require('serve-static');
  var serveIndex = require('serve-index');
  var app = require('connect')()
    .use(require('connect-livereload')({port: 35729}))
    .use(serveStatic('app'))
    .use(serveStatic('.tmp'))
    // paths to bower_components should be relative to the current file
    // e.g. in app/index.html you should use ../bower_components
    .use('/bower_components', serveStatic('bower_components'))
    .use(serveIndex('app'));

  require('http').createServer(app)
    .listen(9000)
    .on('listening', function () {
      console.log('Started connect web server on http://local:9000');
    });
});

gulp.task('serve', ['connect', 'views', 'watch'], function () {
  require('opn')('http://0.0.0.0:9000/style.html');
});

// inject bower components
gulp.task('wiredep', function () {
  var wiredep = require('wiredep').stream;

  gulp.src('app/styles/*.scss')
    .pipe(wiredep({
      ignorePath: '../'
    }))
    .pipe(gulp.dest('app/styles'));

  gulp.src('app/jade/*.jade')
    .pipe(wiredep({
      ignorePath: '../'
    }))
    .pipe(gulp.dest('app/jade'));
});

gulp.task('watch', ['connect'], function () {
  $.livereload.listen();

  // watch for changes
  gulp.watch([
    'app/**/*.jade',
    '.tmp/styles/**/*.css',
    'app/scripts/**/*.js',
    'app/images/**/*'
  ]).on('change', $.livereload.changed);

  gulp.watch('app//**/*.jade', ['views']);
  gulp.watch('app/styles/**/*.scss', ['styles']);
  gulp.watch('bower.json', ['wiredep']);
});

gulp.task('build', ['jshint', 'html', 'images', 'fonts', 'extras'], function () {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
