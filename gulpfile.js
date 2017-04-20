// Dependencies
let gulp		= require('gulp')
	uglify		= require('gulp-uglify'),
	sass		= require('gulp-sass'),
	livereload	= require('gulp-livereload'),
	server		= livereload(),
	concat		= require('gulp-concat');

// Errors
let errorMessage = (error) => {
	console.error.bind(error);
	this.emit('end');
};

// Tasks
gulp.task('default', ['styles'], () => {
	console.log('Gulp complete!');
});

gulp.task('watch', ['watchstyles'], () => {
	console.log('Watching...');
});

gulp.task('styles', ['sass'], () => {
	console.log('Styles complete.');
});

gulp.task('sass', () => {
	gulp.src('public/styles/*.scss')
		.pipe(sass())
		.on('error', errorMessage)
		.pipe(gulp.dest('public/styles/css'))
		.pipe(server);
	console.log('- Sass compiled');
});

gulp.task('watchstyles', () => {
	gulp.watch('public/styles/*.scss', ['styles']);
});