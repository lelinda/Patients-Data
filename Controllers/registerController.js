app.controller("registerController", function($scope, $state, $stateParams, $filter, registerService) {

  // Set error message to false by default
  $scope.errorMessage = false;

  // GET all
  $scope.staffs = registerService.getStaffs()
  console.log("From my controller", $scope.staffs)

  // Get one by ID
  if ($stateParams.id == "" || $stateParams.id == undefined || $stateParams.id == null) {
    $scope.staff = registerService.getStaffById($stateParams.id)
    $scope.submitButton = true;
    $scope.heading = "Register Staff"
  }
  else {
    $scope.staff = registerService.getStaffById($stateParams.id)
    $scope.submitButton = false;
    $scope.heading = "Update Staff"
  }

  // Create
  $scope.addStaff = function() {
    registerService.addStaff($scope.staff)
    console.log("From my controller", $scope.staffs)
  }

  // Update
  $scope.updateStaff = function() {
    registerService.updateStaff($scope.staff)
    console.log("From my controller", $scope.staffs)
  }

  // Delete
  $scope.deleteStaff = function() {
    registerService.deleteStaff($stateParams.id)
  }

  // Login
  $scope.login = function() {
    if (($scope.staff.email != "" && $scope.staff.email != null && $scope.staff.email != undefined) && ($scope.staff.password != "" && $scope.staff.password != null && $scope.staff.password != undefined)) {
      registerService.login($scope.staff)
      console.log("Login my staff", $scope.staffs)
    }
    else {
      $scope.errorMessage = true;
    }
  }

  // Register
  $scope.register = function() {
    if ($scope.staff.firstName != null && $scope.staff.lastName != null && $scope.staff.email != null && $scope.staff.password == $scope.staff.confirmPassword) {
      registerService.register($scope.staff)
      console.log("From my controller", $scope.staffs)
    }
    // Set error message to true if register fields are not filled out
    else {
      $scope.errorMessage = true;
    }
  }

  // Logout
  $scope.logout = function() {
    registerService.logout()
  }
})