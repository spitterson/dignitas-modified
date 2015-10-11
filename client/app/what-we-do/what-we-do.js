'use strict';

angular.module('dignitasApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('what-we-do', {
        url: '/what-we-do',
        templateUrl: 'app/what-we-do/what-we-do.html',
        controller: 'WhatWeDoCtrl'
      });
  });