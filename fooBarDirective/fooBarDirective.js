'use strict';

angular.module('myApp.fooBarDirective',[])
.directive('fooBar',function(){
	return {
        restrict: 'E',
        replace: true,
        templateUrl: '/static/totemFront/directives/fooBarDirective/fooBarDirective.html'
    };
})

