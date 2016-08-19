var module = angular.module('siteApp', []);

module.service('siteService',function() {
    console.log('Site Service created!');

    //to create unique site id
    var uid = 1;
	
	//Site array to hold list of all sites
    var sites = [{
        'id': '1001-2001',
        'name': 'Orange'
    }];
	
	//simply returns the site list
    this.list = function () {
        return sites;
    }
	
    //simply search sites list for given id
    //and returns the site object if found
    this.get = function (id) {
        for (i in sites) {
            if (sites[i].id == id) {
                return sites[i];
            }
        }
    }
	
    //iterate through sites list and delete 
    //site if found
    this.delete = function (id) {
        for (i in sites) {
            if (sites[i].id == id) {
                sites.splice(i, 1);
            }
        }
    }
	
    //save method create a new site if not already exists
    //else update the existing object
    this.save = function (site) {
        if (site.id == null) {
            //if this is new site, add it in sites array
            site.id = uid++;
            sites.push(site);
        } else {
            //for existing site, find this site using id
            //and update it.
            for (i in sites) {
                if (sites[i].id == site.id) {
                    sites[i] = site;
                }
            }
        }

    }
});

module.controller('siteController',function($scope, siteService){
	console.log('Site Controller created!');

    $scope.sites = siteService.list();	
	
    $scope.saveSite = function () {
        siteService.save($scope.newsite);
        $scope.newsite = {};
    }
	
    $scope.delete = function (id) {

        siteService.delete(id);
        if ($scope.newsite.id == id) $scope.newsite = {};
    }

    $scope.edit = function (id) {
        $scope.newsite = angular.copy(siteService.get(id));
    }
});