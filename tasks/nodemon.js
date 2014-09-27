'use strict';


module.exports = function clean(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-nodemon');

    // Options

    return {
        dev: {
            script: 'index.js'
        }
    };
};
