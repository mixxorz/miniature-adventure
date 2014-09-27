'use strict';


module.exports = function clean(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Options
    return {
        sass: {
            files: 'public/scss/**/*.scss',
            tasks: ['sass:watch']
        },
        options: {
            livereload: true
        }
    };
};
