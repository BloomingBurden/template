import gulpSvgSprite from 'gulp-svg-sprite';

export function svgSprite() {
    return app.gulp.src(app.path.src.svgicons, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SVG",
                message: "Error: <%= error.message %>"
            })))
        .pipe(gulpSvgSprite({
            mode: {
                stack: {
                    sprite: `../icons/icons.svg`,
                    example: true,
                }
            }
        }))
        .pipe(app.gulp.dest(app.path.build.js))
}