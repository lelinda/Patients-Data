app.controller("patientController", function ($scope, $state, $stateParams, $filter, patientService) {

  // Get all
  $scope.patients = patientService.getPatients()
  console.log("From my controller: ", $scope.patients);

  // Get one by ID
  if($stateParams.id == "" || $stateParams.id == undefined || $stateParams == null) {
    $scope.patient = patientService.getPatientById($stateParams.id)
    $scope.submitButton = true;
    $scope.heading = "Add New Patient"
  }
  else {
    $scope.patient = patientService.getPatientById($stateParams.id)
    $scope.submitButton = false;
    $scope.heading = "Update Patient"
  }

  // Create
  $scope.addPatient = function() {
    patientService.addPatient($scope.patient)
  }

  // Update
  $scope.updatePatient = function() {
    patientService.updatePatient($scope.patient)
  }

  // Delete
  $scope.deletePatient = function() {
    patientService.deletePatient($stateParams.id)
  }
})