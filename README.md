[![view on npm](http://img.shields.io/npm/v/grunt-jsreg-jsdoc-to-md.svg)](https://www.npmjs.org/package/grunt-jsreg-jsdoc-to-md)
[![npm module downloads](http://img.shields.io/npm/dt/grunt-jsreg-jsdoc-to-md.svg)](https://www.npmjs.org/package/grunt-jsreg-jsdoc-to-md)

# grunt-jsreg-jsdoc-to-md

A grunt plugin for [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).

It is designed for multi js package projects, which are typically used in map.apps projects using the js registry.


## Install

```sh
$ npm install grunt-jsreg-jsdoc-to-md --save-dev
```

## Usage

Example `Gruntfile.js`:

```js
'use strict'
module.exports = function (grunt) {

  grunt.initConfig({
    jsreg_jsdoc2md: {
        generate_apidocs: {
            files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/.apidoc'],
                    dest: 'dest/'
                }]
        }
    }
  })

  grunt.loadNpmTasks('grunt-jsreg-jsdoc-to-md')
  grunt.registerTask('default', 'jsreg_jsdoc2md')
}
```

The `files` configuration of the plugin assumes that the `src` option identifies a `.apidoc` file.
This is a flag file to indicate that for this package the api documentation should be generated.
The `dest` directory is the target directory in which the `API.md` file are created.