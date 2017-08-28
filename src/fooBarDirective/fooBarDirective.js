'use strict';

angular.module('cier.utils.fooBarDirective',[])
.directive('fooBar',function(){
	return {
        restrict: 'E',
        replace: true,
        templateUrl: 'src/fooBarDirective/fooBarDirective.html'
    };
})

