const { series, src , dest , symlink } = require("gulp");
const babel  = require("gulp-babel");
const uglify  = require("gulp-uglify");

exports.default = ()=>{
    return src("src/*.js")
    // .pipe(babel({presets: ['@babel/env']}))
    .pipe(src("vendors/plugins.js"))
    .pipe(uglify())
    .pipe(dest("dist"))
    .pipe(dest("dist2"))
}

function link() {
    return src('src/*.js')
      .pipe(symlink('output/'));
  }
exports.link = link;