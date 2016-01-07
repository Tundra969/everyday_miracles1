var app = angular.module('app',['ngAnimate','ngRoute', 'ui.grid',
  'ui.grid.selection','ngMaterial', 'ui.grid.exporter', 'ui.calendar']);

app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){

  $httpProvider.interceptors.push('AuthenticationRedirectInjector');

  $routeProvider
      .when('/uicalendar', {
        templateUrl: '/templates/uicalendar.jade',
        controller: "UiCalendarController"
      })
      .when('/addevent', {
        templateUrl: '/secure/templates/addevent.jade',
        controller: "AddEventController"
      })
      .when('/addwalkin', {
        templateUrl: '/templates/addwalkin.jade',
        controller: "AddWalkinController"
      })
      .when('/attendance', {
        templateUrl: '/templates/attendance.jade',
        controller: "AttendanceController"
      })
      .when('/changepassword', {
        templateUrl:'secure/templates/changepassword.jade',
        controller:'ChangePasswordController'
      })
      .when('/chooseclassdates', {
        templateUrl: '/secure/templates/chooseclassdates.jade',
        controller: "ChooseClassDatesController"
      })
      .when('/confirmclasssignup', {
        templateUrl: '/templates/confirmclasssignup.jade',
        controller: "ConfirmClassSignupController"
      })
      .when('/directory', {
        templateUrl: '/templates/directory.jade',
        controller: "DirectoryController"
      })
      .when('/eventdetails', {
        templateUrl: '/templates/eventdetails.jade',
        controller: "EventDetailsController"
      })
      .when('/findwalkin', {
        templateUrl: '/templates/findwalkin.jade',
        controller: "FindWalkinController"
      })
      .when('/login', {
        templateUrl: '/templates/login.jade',
        controller: "LoginController"
      })
      .when('/profile', {
        templateUrl:'/templates/profile.jade',
        controller: "ProfileController"
      })
      .when('/studentclasslist', {
        templateUrl: '/templates/studentclasslist.jade',
        controller: 'StudentClassListController'
      })
      .when('/testsql', {
        templateUrl: "assets/views/routes/testsql.html",
        controller: "TestSqlController"
      })
      .when('/userregistration', {
        templateUrl: '/templates/userregistration.jade',
        controller: "UserRegistrationController"
      })
      .otherwise({
        templateUrl: '/templates/uicalendar.jade',
        controller: "UiCalendarController"
      });

}]);
