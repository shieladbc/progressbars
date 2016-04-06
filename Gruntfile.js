'use strict';
 
module.exports = function (grunt) {
    var config = {};

    // LESS COMPILER TASKS
    grunt.loadNpmTasks('grunt-contrib-sass');
    config.sass = {
        build: {
            options: {
                style: 'compressed'
            },
            files:{
                "css/style.min.css": "sass/build.scss"
            }

        }
    }

    // WATCH TASKS
    grunt.loadNpmTasks('grunt-contrib-watch');
    config.watch = {
        style:{
            files:["./sass/*.scss"],
            tasks:['sass:build'],
            options:{
                reload: true
            }
        }
    }


    // WATCH TASKS
    grunt.loadNpmTasks('grunt-contrib-uglify');
    config.uglify = {
        js:{
            files:{
                "./js/script.min.js":['./lib/jquery/jquery.min.js','./lib/bootstrap/dist/js/bootstrap.min.js','./js/custom.js']
            },
            options:{}
        }
    }



    grunt.initConfig(config);
    grunt.registerTask('build', [
        'sass:build',
        'uglify:js'
    ])
    grunt.registerTask('default', [
        'sass:build',
        'uglify:js',
        'watch'
    ]);
};