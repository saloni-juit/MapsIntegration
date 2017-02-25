'use strict';

/**
 * @ngdoc function
 * @name signeasyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the signeasyApp
 */
angular.module('signeasyApp')
  .controller('MainCtrl',['$http','$scope','$location', function ($http,$scope,$location) {

  	$scope.countries = [];

     $http.get('../data/countries.json').
        then(function(response, status, headers, config) {
            $scope.countries=response.data;
        });


        $scope.detailPage = function(index){
        	var country = $scope.countries[index];
        	$location.path('/detail').search({name:country.CountryName,lat:country.CapitalLatitude,lon:country.CapitalLongitude});
        	//('detail', {stateParamKey: $scope.countries[index]});
        };
   
  }]);
