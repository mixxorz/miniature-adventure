'use strict';


module.exports = function sass(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-sass');

	// Options
	return {
        watch: {
            options: {
                outputStyle: 'nested'
            },
            files: [{
                expand: true,
                cwd: 'public/scss',
                src: ['**/*.scss'],
                dest: 'public/css/',
                ext: '.css'
            }]
        },
        build: {
            options: {
                outputStyle: 'compressed'
            },
            files: [{
                expand: true,
                cwd: 'public/scss',
                src: ['**/*.scss'],
                dest: '.build/css/',
                ext: '.css'
            }]
        }
	};
};
