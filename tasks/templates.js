import gulp from 'gulp';
import gulpIf from 'gulp-if';
import plumber from 'gulp-plumber';
import inheritance from 'gulp-jade-inheritance';
import filter from 'gulp-filter';
import rename from 'gulp-rename';
import errorHandler from 'gulp-plumber-error-handler';
import getData from 'jade-get-data';
import staticHash from 'gulp-static-hash';
import fileinclude from 'gulp-file-include';

const data = {
	getData: getData('app/data'),
	jv0: 'javascript:void(0);'
};

gulp.task('templates', () => (
	gulp.src('app/pages/*.html')
		.pipe(plumber({errorHandler: errorHandler(`Error in \'templates\' task`)}))
		.pipe(gulpIf(global.watch, inheritance({basedir: 'app'}, inheritance)))
		.pipe(filter(file => /app[\\\/]pages/.test(file.path)))
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(gulpIf(process.env.NODE_ENV === 'production', staticHash({
			asset: 'dist',
			exts: ['js', 'css']
		})))
		.pipe(rename({dirname: '.'}))
		.pipe(gulp.dest('dist'))
));
