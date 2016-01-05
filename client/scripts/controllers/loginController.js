app.controller('LoginController',['$scope', '$http', '$location', 'ActiveProfileFactory',
  function ($scope, $http, $location, ActiveProfileFactory) {
  var activeProfileFactory = ActiveProfileFactory;
  console.log('hi, from Login Controller');

  $scope.user = {};
  $scope.submitCredentials = function () {
    console.log('data sent to server', $scope.user);
    $http.post('/login', $scope.user)
      .then(function (response) {
        //console.log('is this html?', response.data);
        console.log('response is', response);
        //console.log('response status', response.status);
        if (response.status===200){
          activeProfileFactory.setLoggedInUser(response.data.userId);
          $location.path('/uicalendar');
        }
        else{
          // $location.path('/failure');
          alert('sign in failed');
        }

      });
  };

}]);
