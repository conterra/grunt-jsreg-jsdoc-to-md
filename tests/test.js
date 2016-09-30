define(function(require, module) {
    var registerSuite = require('intern!object');
    var assert = require('intern/chai!assert');

    var exec = require('intern/dojo/node!child_process').exec;
    var fs = require('intern/dojo/node!fs');

    var env = {
        cwd: require.toUrl("root")
    };

    registerSuite({
        name: 'tasks/jsreg_jsdoc2md',
        "ensure that API.md files are created": function() {
            var dfd = this.async();
            exec('grunt jsreg_jsdoc2md:test_generate_apidocs --verbose', env, dfd.callback(function(error, stdout, stderr) {
                if (error) {
                    dfd.reject(error);
                    return;
                }
                console.log(`stdout: ${stdout}`);
                console.log(`stderr: ${stderr}`);

                var b1API = fs.readFileSync('tmp/b1/API.md', 'utf8');
                var b3API = fs.readFileSync('tmp/bundles/b3/API.md', 'utf8');
                assert.isFalse(fs.existsSync('tmp/bundles/b2/API.md'));
                assert(/a class with all of the things/.test(b1API));
                assert(/a class with all of the things/.test(b3API));
            }));
        }
    });
});