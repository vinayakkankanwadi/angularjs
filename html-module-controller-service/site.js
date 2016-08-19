var module = angular.module('siteApp', []);

module.service('siteService',function() {
    console.log('Site Service created!');
});

module.controller('siteController',function($scope, siteService){
	console.log('Site Controller created!');
});