'use strict';
var jsdoc2md = require('jsdoc-to-markdown');
var fs = require('fs');
var path = require('path');


function writeAPIDoc(grunt, dir, done) {
    var opts = {};
    opts.src = dir.src;
    var out = dir.dest;

    grunt.file.mkdir(path.dirname(out));
    var renderStream = jsdoc2md(opts);
    grunt.log.oklns('writing ' + out);
    renderStream.on('error', grunt.fail.fatal);
    renderStream.on('end', done);
    renderStream.pipe(fs.createWriteStream(out));
}

module.exports = function(grunt) {
    grunt.registerMultiTask('jsreg_jsdoc2md', 'API documentation generator', function() {
        var done = this.async();
        if (!this.files.length) {
            done();
            return;
        }

        var options = this.options({
            filename: "API.md"
        });
        var filename = options.filename;

        var dirs = [];
        this.files.forEach((file) => {
            dirs.push({
                src: path.dirname(file.src) + "/**/*.js",
                dest: path.dirname(file.dest) + "/" + filename
            });
        });
        var toProcess = dirs.length;
        dirs.forEach((dir) => {
            writeAPIDoc(grunt, dir, function() {
                if (!--toProcess) {
                    done();
                }
            });
        });
    });
};
