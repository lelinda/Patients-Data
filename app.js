var app = angular.module("myApp", ["ui.router"])

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/")

  // HOME & LOGIN INDEX VIEW
  $stateProvider
  .state("home", {
    url: "/",
    templateUrl: "./views/home.html",
    controller: "registerController"
  })

  // PATIENTS INDEX VIEW
  .state("patients", {
    url: "/patients",
    templateUrl: "./views/patients.html",
    controller: "patientController"
  })

  // PATIENTS CREATE VIEW
  .state("patientsCreate", {
    url: "/patients/new",
    templateUrl: "./views/patients-form.html",
    controller: "patientController"
  })        

  // PATIENT SHOW VIEW
  .state("patient", {
    url: "/patients/:id",
    templateUrl: "./views/patient.html",
    controller: "patientController"
  }) 

  // PATIENTS UPDATE VIEW
  .state("patientsUpdate", {
    url: "/patients/:id/edit",
    templateUrl: "./views/patients-form.html",
    controller: "patientController"
  })    

  // REGISTER CREATE VIEW
  .state("staffCreate", {
    url: "/staff/new", 
    templateUrl: "./views/register-form.html", 
    controller: "registerController"
  })

  // REGISTER SHOW VIEW
  .state("staff", {
    url: "/staff/:id", 
    templateUrl: "./views/staff.html",
    controller: "registerController"
  })

  // REGISTER UPDATE VIEW
  .state("staffUpdate", {
    url: "/staff/:id/edit", 
    templateUrl: "./views/register-form.html",
    controller: "registerController"
  })

  // LOGOUT
  .state("logout", {
    url: "/",
    templateUrl: "./views/home.html",
    controller: "registerController"
  })
})