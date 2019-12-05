import angular from 'angular';
import '../public/scss/app.scss'
import 'angular-route';
import 'angular-cookies'
import 'angular-messages';
import 'angular-resource';
import 'angular-aria';
import 'angular-material';
import '@uirouter/angularjs';

import Config from './config'
import RegisterDirectives from './directives'
import RegisterComponents from './components'
// material scss
// require('angular-material/angular-material.scss');

// custom scss "GENERAL STYLE"

// require('../public/scss/app.scss')

// material required


// modules
var ngModule = angular.module('app', ["ngMaterial", "ngRoute", "ngCookies"]).run(function () {
    console.log('App is running')
});

// load module config file
Config(ngModule)

// load directives
RegisterDirectives(ngModule)

// load Components
RegisterComponents(ngModule)
// console.log(angular)