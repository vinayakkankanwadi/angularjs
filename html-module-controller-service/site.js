var module = angular.module('siteApp', []);

module.service('siteService',function() {
    console.log('Site Service created!');
});

module.controller('siteController',function(){
	console.log('Site Controller created!');
});