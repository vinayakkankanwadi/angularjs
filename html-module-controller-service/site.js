var module = angular.module('siteApp', []);

module.service('siteService',function() {
    console.log('Site Service created!');

    //to create unique site id
    var uid = 1;
	
	//Site array to hold list of all sites
    var sites = [{
        'id': '1001-2001',
        'name': 'Orange'
    },
	{
	    'id': '1001-2003',
        'name': 'Feres'	
	}
	];

	//Key array to hold list of all keys
    var keys = [{
        'id': '1001-2001',
        'key': '222aaa'
    },
	{
	    'id': '1001-2003',
        'key': ''	
	}
	];
	
	//simply returns the site list
    this.list = function () {
        return sites;
    }
	
    //simply search sites list for given id
    //and returns the site object if found
    this.getSite = function (id) {
        for (i in sites) {
            if (sites[i].id == id) {
                return sites[i];
            }
        }
    }
	
    //simply search keys list for given id
    //and returns the key object if found
    this.getKey = function (id) {
        for (i in keys) {
            if (keys[i].id == id) {
                return keys[i];
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

    //generate method create a new key if not already exists
    //else update the existing object
    this.generate = function (id) {
        //for existing site, find this site using id
        //and update it
		for (i in keys) {
			if (keys[i].id == id) {
				keys[i].key = 'XAE';
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
	
    $scope.generate = function (id) {
        siteService.generate(id);
		$scope.update(id);
    }
	
    $scope.delete = function (id) {
        siteService.delete(id);
        if ($scope.newsite.id == id) $scope.newsite = {};
    }

    $scope.edit = function (id) {
        $scope.newsite = angular.copy(siteService.get(id));
    }
    
	$scope.update = function (id) {
        $scope.currentsite = angular.copy(siteService.getSite(id));
		$scope.currentkey = angular.copy(siteService.getKey(id));
    }
});