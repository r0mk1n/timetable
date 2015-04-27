/**
 * Grunt taskfiles
 *
 */
module.exports = function (grunt) {
    var copyDist = '../vhosts/timetable/';

    // init
    grunt.initConfig({
        // validate js

        // concat files
        concat: {
            js: {
                src: [
                    // toolbar namespace
                    'src/NamespaceToolbar.js',

                    // building zepto
                    'libs/zepto.js',
                    'libs/ajax.js',
                    'libs/assets.js',
                    'libs/callbacks.js',
                    'libs/data.js',
                    'libs/deferred.js',
                    'libs/detect.js',
                    'libs/event.js',
                    'libs/form.js',
                    'libs/fx.js',
                    'libs/fx_methods.js',
                    'libs/gesture.js',
                    'libs/ie.js',
                    'libs/ios3.js',
                    'libs/selector.js',
                    'libs/stack.js',
                    'libs/touch.js',

                    'libs/heatmap.js',

                    'libs/zepto.movable.js',
                    'libs/slider/zepto.seevo.range-slider.js',
                    'libs/slider/zepto.seevo.slider.js',

                    'node_modules/pwjcookie/pwjcookie.min.js',
                    'node_modules/chart.js/Chart.min.js',

                    // libs
                    //'libs/*',

                    // config
                    'src/utils/UtilTime.js',
                    'src/config/Config.js',
                    'src/config/Consts.js',

                    // utils
                    'src/utils/UtilConnection.js',
                    'src/utils/UtilStorage.js',
                    'src/utils/UtilTemplate.js',
                    'src/utils/UtilRectangleHeatmap.js',

                    'src/utils/Debug.js',

                    // elements
                    'src/controllers/elements/ColorsHelper.js',
                    'src/controllers/elements/ChartDoughnutHelper.js',
                    'src/controllers/elements/ChartLineHelper.js',
                    'src/controllers/elements/DateRangeHelper.js',
                    'src/controllers/elements/OpacityHelper.js',
                    'src/controllers/elements/FormatHelper.js',
                    'src/controllers/elements/AutocompleteHelper.js',
                    'src/controllers/elements/FilterHelper.js',
                    'src/controllers/elements/ErrorsHelper.js',
                    'src/controllers/elements/ProgressHelper.js',
                    'src/controllers/elements/DataHelper.js',
                    'src/controllers/elements/SliderHelper.js',
                    'src/controllers/elements/HeatmapHelper.js',

                    // controllers
                    'src/controllers/ControllerOverlay.js',
                    'src/controllers/ControllerLogin.js',
                    'src/controllers/ControllerToolbar.js',
                    'src/controllers/ControllerSiteAnalyticsPanel.js',
                    'src/controllers/ControllerPageAnalyticsPanel.js',
                    'src/controllers/ControllerTopPagesPanel.js',
                    'src/controllers/ControllerFiltersPanel.js',
                    'src/controllers/ControllerHeatmapsPanel.js',
                    'src/controllers/ControllerLiveClicksPanel.js',
                    'src/App.js'
                ],
                dest: 'dist/seevolution-toolbar.js'
            },
            css: {
                src: [
                    'src/styles/seevoreset.css',

                    // 'src/styles/normalize.css',
                    'src/styles/misk.css',
                    'src/styles/icons.css',
                    'src/styles/overlay.css',
                    'src/styles/toolbar.css',
                    'src/styles/login.css',
                    'src/styles/panel.css',
                    'src/styles/site_analytics.css',
                    'src/styles/page_analytics.css',
                    'src/styles/heatmaps.css',
                    'src/styles/liveclicks.css',

                    'libs/slider/zepto.seevo.slider.css',
                    'src/styles/autocomplete.css',
                    'src/styles/filters.css',
                    'src/styles/progress.css',
                    'src/styles/hint.css'
                ],
                dest: 'dist/seevolution-toolbar.css'
            }
        },

//        jshint: {
//            files: ['Gruntfile.js', 'dist/seevolution-toolbar.js']
//        },

        copy: {
            'main': {
                cwd: 'dist/',
                src: '*',
                dest: copyDist,
                expand: true
            }
        },

        // uglify
        uglify: {
            dist: {
                src: ['<%= concat.js.dest %>'],
                dest: 'dist/seevolution-toolbar.min.js'
            }
        }
    });

    // loading
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    var enableCopy = true;
    var operations = ['concat', 'uglify'];

    if ( true === enableCopy && grunt.file.exists(copyDist)) {
        grunt.loadNpmTasks('grunt-contrib-copy');
        operations.push( 'copy' )
    }

    // default tasks list
    grunt.registerTask('default', operations );
};