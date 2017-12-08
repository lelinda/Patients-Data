app.service("registerService", function($state) {

  // Create staffs array
  var _staffs = []
  var _staffId = 0;

  // Create staffs constuctor
  var Staff = function(id, firstName, lastName, email, password) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }

  _staffs.push(new Staff(_staffId++, "April", "Evila", "aprilevila@gmail.com", "aevil123"))
  _staffs.push(new Staff(_staffId++, "Eriya", "Lea", "leaeriyaaa@yahoo.com", "leaya063"))
  _staffs.push(new Staff(_staffId++, "Aiden", "Mitch", "mitchaiden@outlook.com", "mitchden4234"))
  _staffs.push(new Staff(_staffId++, "Harper", "Vongosa", "hvongosa@gmail.com", "vongosweetarper"))
  _staffs.push(new Staff(_staffId++, "Mason", "Neill", "masonneill123@icloud.com", "maeill987"))

  console.log("From my service: ", _staffs)

  // GET all
  this.getStaffs = function() {
    return _staffs
  }

  // GET one by ID
  this.getStaffById = function(id) {
    if (id == "" || id == undefined || id == null) {
      var staff = []
      return staff
    }
    else {
      for (var i = 0; i < _staffs.length; i++) {
        if (_staffs[i].id == id) {
          return _staffs[i]
        }
      }
    }
  }

  // Create
  this.addStaff = function(staff) {
    staff.id = _staffId++
    _staffs.unshift(staff)
    $state.go("staffCreate")
  }

  // Update
  this.updateStaff = function(staff) {
    for (var i = 0; i < _staffs.length; i++) {
      if (_staffs[i].id == staff.id) {
        _staffs.splice(i, 1, staff)
        $state.go("staff", { id: staff.id })
      }
    }
  }

  // Delete
  this.deleteStaff = function(id) {
    var result = confirm("Are you sure you would like to delete this staff?");
    if (result == true) {
      for (var i = 0; i < _staffs.length; i++) {
        if (_staffs[i].id == id) {
          _staffs.splice(i, 1)
          $state.go("home")
        }
      }
    }
    else {
      $state.go("staff");
    }
  }

  // Login
  this.login = function(staff) {
    for (var i = 0; i < _staffs.length; i++) {
      if (_staffs[i].email == staff.email && _staffs[i].password == staff.password) {
        this.currentStaff = _staffs[i]
        this.currentStaff.status = true;
        $state.go("patients")
      }
    }
  }

  // Register
  this.register = function(staff) {
    staff.id = _staffId++
    _staffs.unshift(staff)
    console.log(_staffs);
    $state.go("home")
  }

  this.currentStaff = null;
})