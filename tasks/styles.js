import gulp from 'gulp';
import plumber from 'gulp-plumber';
import gulpIf from 'gulp-if';
import rupture from 'rupture';
import stylint from 'gulp-stylint';
import stylus from 'gulp-stylus';
import importIfExist from 'stylus-import-if-exist';
import autoprefixer from 'autoprefixer-stylus';
import gcmq from 'gulp-group-css-media-queries';
import nano from 'gulp-cssnano';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import errorHandler from 'gulp-plumber-error-handler';
import sass from 'gulp-sass';
import magicImporter from 'node-sass-magic-importer';

const isDebug = process.env.NODE_ENV !== 'production';

gulp.task('scss-style', () => (
		gulp.src('app/styles/*.scss')
		.pipe(plumber({errorHandler: errorHandler(`Error in \'styles\' task`)}))
		.pipe(gulpIf(isDebug, sourcemaps.init()))
		.pipe(sass({
			use: [
				importIfExist(),
				rupture(),
				autoprefixer()
			],
			'include css': true,
			importer: magicImporter()
		}))
		.pipe(gulpIf(!isDebug, gcmq()))
		.pipe(gulpIf(!isDebug, nano({zindex: false})))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulpIf(isDebug, sourcemaps.write()))
		.pipe(gulp.dest('dist/styles'))
	));

gulp.task('styles:lint', () => (
	gulp.src(['app/blocks/**/*.styl', '!app/styles/**'])
		.pipe(stylint({
			reporter: 'stylint-stylish',
			reporterOptions: {verbose: true}
		}))
		.pipe(stylint.reporter())
		.pipe(stylint.reporter('fail', {failOnWarning: true}))
));
