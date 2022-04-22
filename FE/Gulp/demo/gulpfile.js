const { src , dest , watch , series } = require("gulp");
const babel = require("gulp-babel")
const uglify = require("gulp-uglify")
const rename = require("gulp-rename");
var concat = require('gulp-concat');

const streamTask =  ()=>{
    console.log("iam stream Task")
    return src("src/*.js")
    // .pipe(sourcemaps.write())
    .pipe(babel({
        presets: ['@babel/env']
    }
    ))
    .pipe(src( ["vendors/**/*.js" , "!vendors/**/*.min.js" ]) )
    // .pipe(uglify())
    .pipe(rename({extname: ".min.js"}))
    .pipe(concat("main.js"))
    .pipe(dest("dist"))
}

const promiseTask = ()=>{
    return Promise.resolve("iam promise")
}

const syncTask =  (cb)=>{
    console.log("sync task")
    // to assin completion
    cb(()=>{ new Error("iam custom error of completion") });
}

const  mainTask = ()=>{
    watch(["src/***.js" ] , series( streamTask , promiseTask) )
}

exports.default = mainTask;
exports.syncTask = syncTask;
exports.promiseTask = promiseTask;
exports.stream = streamTask