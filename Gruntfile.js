'use strict';
module.exports = function(grunt) {
    grunt.initConfig({
        jsreg_jsdoc2md: {
            test_generate_apidocs: {
                files: [{
                        expand: true,
                        cwd: 'tests/',
                        src: ['**/.apidoc'],
                        dest: 'tmp/'
                    }]
            }
        }
    });
    grunt.loadTasks('tasks');
};