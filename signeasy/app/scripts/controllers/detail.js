'use strict';

/**
 * @ngdoc function
 * @name signeasyApp.controller:MainCtrl
 * @description
 * # DetailCtrl
 * Controller of the signeasyApp
 */
angular.module('signeasyApp')
  .controller('DetailCtrl',['$http','$scope', '$location',function ($http,$scope,$location) {
    //getting params
    var urlParams = $location.search();
     $scope.lat = urlParams.lat;
     $scope.lon = urlParams.lon;
     var countryName = urlParams.name;
     $scope.mapCenter = [$scope.lat,$scope.lon];

     //calling a different api to get the cities for that particular country
     $scope.cities = [];
     $http.get('../data/cities.json').
        then(function(response, status, headers, config) {
            var countryObj = response.data.filter(function(item){
			    if(item.countryName == "Somaliland"){
			        return item;	
			    }
			});

			$scope.cities = countryObj[0].cities;
        });

     $scope.UpdateMap = function(){
     	//updating according to city
     	var city = $scope.city;
     	$scope.lat = $scope.city.cityLatitude;
     	$scope.lon = $scope.city.cityLongitude;

     	$scope.mapCenter = [$scope.lat,$scope.lon];
     }

     

  }]);

