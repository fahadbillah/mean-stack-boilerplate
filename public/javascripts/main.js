(function() {
	'use strict';
	/**
	* MEAN Module
	*
	* Description
	*/
	angular.module('MEAN', [
		'ngRoute',
		'oc.lazyLoad'
		])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider
		.when('/home', {
			templateUrl: '/home',
			controller: 'HomeCtrl',
			resolve: {
				loadAsset: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load([
						'/javascripts/controllers/HomeCtrl.js',
						])
				}]
			}
		})
		.when('/login', {
			templateUrl: '/login',
			controller: 'LoginCtrl',
			resolve: {
				loadAsset: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load([
						'/javascripts/controllers/LoginCtrl.js',
						])
				}]
			}
		})
		.otherwise('/home');
		$locationProvider.hashPrefix('');
	}])
})();
