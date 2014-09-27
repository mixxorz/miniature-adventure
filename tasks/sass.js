'use strict';


module.exports = function sass(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-sass');

	// Options
	return {
        watch: {
            options: {
                outputStyle: 'nested',
                includePaths: ['public/components/foundation/scss']
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
                outputStyle: 'compressed',
                includePaths: ['public/components/foundation/scss']
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
