var module = angular.module('siteApp', []);

module.service('SiteService',function() {
    console.log('Site Service created!');
});

module.controller('SiteController',function(){
	console.log('Site Controller created!');
});