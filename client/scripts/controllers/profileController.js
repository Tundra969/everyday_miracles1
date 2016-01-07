app.controller("ProfileController", ["$scope", "$http", "ActiveProfileFactory", "$location", "$localstorage",
  function($scope, $http, ActiveProfileFactory, $location, $localstorage){
    var activeProfileFactory = ActiveProfileFactory;
    $scope.user = {};
    $scope.tempUser = {};

    //var testUser = activeProfileFactory.getActiveProfileData();
    //console.log('testUser.userId', testUser.userId);
      var testUserId = $localstorage.get("userId");
      console.log("the user: ", testUserId);

    //get profile info for profile page
    $scope.getUser = function(){
        var user = {
            userId: testUserId
        };
        console.log("the input of getUser: ",user);
        $http.get('/users/byUserId', {params: user}).then(function (response) {
            console.log("Output from get /users/byUserId ", response.data);
            $scope.tempUser = response.data[0];

            //define $scope.user
            $scope.user.firstName = $scope.tempUser.first_name;
            $scope.user.lastName = $scope.tempUser.last_name;
            $scope.user.userId = $scope.tempUser.user_id;
            $scope.user.userName = $scope.tempUser.user_name;
            $scope.user.roleName = $scope.tempUser.role_name;
            $scope.user.roleId = $scope.tempUser.role_id;
            $scope.user.dateOfBirth = $scope.tempUser.date_of_birth;
            if ($scope.user.dateOfBirth !== null) {
                $scope.user.dateOfBirth = new Date($scope.user.dateOfBirth);
            }
            $scope.user.phoneNumber = $scope.tempUser.phone_number;
            $scope.user.emailAdress = $scope.tempUser.email_address;
            $scope.user.contactType = $scope.tempUser.contact_type;
            $scope.user.paymentType = $scope.tempUser.payment_type;
            $scope.user.everydayMiraclesClientInd = $scope.tempUser.everyday_miracles_client_ind;
            $scope.user.doulaName = $scope.tempUser.doula_name;
            $scope.user.expectedBirthDate = $scope.tempUser.expected_birth_date;
            if ($scope.user.expectedBirthDate !==null){
                $scope.user.expectedBirthDate = new Date($scope.user.expectedBirthDate);
            }

            console.log("the #scope.user: ", $scope.user);
        });
    };

    $http.get('/users/roles').then(function (response) {
        $scope.roles = response.data;
    });

    //save profile
    $scope.saveProfile = function() {
        console.log("Input to put /users ", $scope.user);

        $http.put('/users', $scope.user).then(function (response) {
            console.log("Output from put /users ", response.data);
        });
    };

    //change password
    $scope.changePassword = function() {
        console.log("clicked the change password");
        $location.path('/changepassword');
    };
    $scope.getUser();

}]);
