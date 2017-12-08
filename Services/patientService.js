app.service("patientService", function($state) {

  // Create patients array
  var _patients = [];
  var _patientId = 0;

  // Create patients constructor
  var Patient = function(id, chartNo, firstName, middleName, lastName, dob, gender, phone, email, street, city, state, zip, ethnicity, race, maritalStatus, prefLang, emergencyName, emergencyNum, relationship, notes) {
    this.id = id;
    this.chartNo = chartNo;
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.dob = dob;
    this.gender = gender;
    this.phone = phone;
    this.email = email;
    this.street = street;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.ethnicity = ethnicity;
    this.race = race;
    this.maritalStatus = maritalStatus;
    this.prefLang = prefLang;
    this.emergencyName = emergencyName;
    this.emergencyNum = emergencyNum;
    this.relationship = relationship;
    this.notes = notes;
  }

  _patients.push(new Patient(_patientId++, "GPU04181963", "Pura", "Osaka", "Giard", new Date("04/18/1963"), "Male", "(340) 834-3580", "p.giard@gmail.com", "7559 South Gonzales Court", "Bloomington", "Indiana", "47401", "Non Hispanic/Latino", "White", "Married", "English", "Melanie Giard", "(528) 340-1049", "Sister", "NKDA"))

  _patients.push(new Patient(_patientId++, "CEL07021976", "Elaine", "Shera", "Couglan", new Date("07/02/1976"), "Female", "(582) 309-0093", "e.couglan@aol.com", "4 Goldfield Road", "Honolulu", "Hawaii", "96815", "Non Hispanic/Latino", "Native Hawaiian/Other Pacific Islander", "Married", "English", "Mike Couglan", "(876) 957-2973", "Spouse", "Allergic to antibiotics"))

  _patients.push(new Patient(_patientId++, "FTA12292013", "Tandy", "", "Flower", new Date("12/29/2013"), "Female", "(680) 380-2202", "t.flower@yahoo.com", "71 Pilgrim Avenue", "Chevy Chase", "Maryland", "20815", "Non Hispanic/Latino", "White", "Single", "English", "Sarah Flower", "(573) 824-6803", "Mother", "Allergic to peanuts"))

  _patients.push(new Patient(_patientId++, "POL12041944", "Olimpia", "Maverick", "Patridge", new Date("12/04/1944"), "Female", "(092) 353-9021", "o.patridge@icloud.com", "44 Shirley Avenue", "West Chicago", "Illinois", "60185", "Non Hispanic/Latino", "White", "Widow", "English", "Melysa Lee", "(608) 505-1349", "Daughter", "Allergic to dogs and cats"))

  _patients.push(new Patient(_patientId++, "LRA09031952", "Ramiro", "", "Littles", new Date("09/03/1952"), "Male", "(964) 592-2332", "r.littles@ymail.com", "70 Bowman Street", "South Windsor", "Connecticut", "06074", "Non Hispanic/Latino", "White", "Divorced", "English", "Gary Ramira", "(313) 423-0315", "Son", "Allergic to eggs"))

  _patients.push(new Patient(_patientId++, "PMI04261939", "Miki", "Shaneeni", "Pasternak", new Date("04/26/1939"), "Female", "(856) 054-3422", "m.pasternak@msn.com", "514 S. Magnolia Street", "Orlando", "Florida", "32806", "Non Hispanic/Latino", "Black or African American", "Married", "English", "Derik Pasternak", "(458) 838-2302", "Spouse", "Seasonal allergies"))

  _patients.push(new Patient(_patientId++, "DKE05211943", "Kenny", "Vix", "Divens", new Date("05/21/1943"), "Male", "(149) 082-3509", "k.divens@outlook.com", "242 Third Avenue", "Chesapeake", "Virginia", "23320", "Non Hispanic/Latino", "Asian", "Married", "Vietnamese", "Aaron Vonsagnerax", "(796) 734-9921", "Grandson", "NKDA"))

  _patients.push(new Patient(_patientId++, "MJA01232010", "Jama", "", "Meguckin", new Date("01/23/2010"), "Female", "(863) 820-4243", "j.meguckin@gmail.com", "80 Oxford Street", "Warwick", "Rhode Island", "02886", "Non Hispanic/Latino", "White", "Single", "English", "Jared Meguckin", "(553) 837-5732", "Father", "Asthma"))

  _patients.push(new Patient(_patientId++, "YEV05102014", "Evelina", "Moana", "Yearsley", new Date("05/10/2014"), "Female", "(342) 309-1222", "e.yearsley@yahoo.com", "4 Grove Street", "Oak Ridge", "Tennessee", "37830", "Non Hispanic/Latino", "White", "Single", "English", "Natalye Yearsley", "(581) 540-9467", "Mother", "Allergic to peanuts and eggs"))

  _patients.push(new Patient(_patientId++, "SSH10131999", "Sheree", "Vila", "Shanley", new Date("10/13/1999"), "Female", "(860) 384-5002", "s.shanley@ymail.com", "9364 Cantebury Avenue", "Lincoln Park", "Michigan", "48146", "Non Hispanic/Latino", "White", "Single", "English", "Edsel Meralge", "(832) 576-3424", "Other", "Diabetes"))

  _patients.push(new Patient(_patientId++, "LKA02021989", "Kassie", "", "Lankford", new Date("02/02/1989"), "Female", "(158) 842-3423", "k.lankford@gmail.com", "507 Poor House Lane", "Langhorne", "Pennsylvania", "19047", "Hispanic/Latino", "Other", "Single", "Spanish", "Kathy Lankford", "(154) 094-6735", "Sister", "NKDA"))

  _patients.push(new Patient(_patientId++, "ERO04041953", "Roxane", "Myshell", "Evert", new Date("04/04/1953"), "Female", "(785) 630-3232", "r.evert@icloud.com", "658 Pilgrim Road", "Avon Lake", "Ohio", "44012", "Non Hispanic/Latino", "Black or African American", "Married", "English", "Voxane Evert", "(735) 796-7349", "Sister", "High blood pressure, high cholesterol"))

  _patients.push(new Patient(_patientId++, "MKR08232009", "Krystle", "Ellen", "Malik", new Date("08/23/2009"), "Female", "(582) 923-1123", "k.malik@yahoo.com", "5 South Manor Station Street", "Longview", "Texas", "75604", "Non Hispanic/Latino", "Black or African American", "Single", "English", "Katherine Malik", "(341) 992-1579", "Mother", "Allergic to peanuts"))

  _patients.push(new Patient(_patientId++, "CTO04141980", "Tonette", "", "Cochrane", new Date("04/14/1980"), "Male", "(780) 958-3530", "t.cochrane@aol.com", "795 Arlington Drive", "Rahway", "New Jersey", "07065",
    "Non Hispanic/Latino", "White", "Married", "English", "Alan Cochrane", "(763) 424-1285", "Spouse", "Seasonal allergies"))

  _patients.push(new Patient(_patientId++, "NJE11221981", "Jene", "Herok", "Nations", new Date("11/22/1981"), "Female", "(090) 843-3442", "j.nations@msn.com", "7 Armstrong Street", "Covington", "Georgia", "30014", "Hispanic/Latino", "Other", "Single", "Spanish", "Erik Geniene", "(349) 921-5795", "Other", "Asthma"))

  _patients.push(new Patient(_patientId++, "FSH06291926", "Shanika", "Baleria", "Finchum", new Date("06/29/1926"), "Female", "(243) 276-8798", "s.finchum@gmail.com", "632 Atlantic Road", "Pleasanton", "California", "94566", "Non Hispanic/Latino", "Asian", "Widow", "Vietnamese", "Valerie Le", "(409) 467-3579", "Daughter", "Diabetes, high cholesterol"))

  _patients.push(new Patient(_patientId++, "DRO01082014", "Robbie", "Nelly", "Deatherage", new Date("01/08/2014"), "Male", "(898) 745-0353", "r.deatherage@outlook.com", "57 Wild Horse Lane", "Ballston Spa", "New York", "12020", "Non Hispanic/Latino", "White", "Single", "English", "Henry Deatherage", "(482) 472-4729", "Father", "NKDA"))

  _patients.push(new Patient(_patientId++, "TCH05011970", "Chars", "Avila", "Tanouye", new Date("05/01/1970"), "Male", "(997) 877-4343", "c.tanouye@mail.com", "22 Boston Avenue", "Hudson", "New Hampshire", "03051", "Non Hispanic/Latino", "Asian", "Married", "Vietnamese", "Averly Tanouye", "(472) 959-7398", "Spouse", "Seasonal allergies"))

  _patients.push(new Patient(_patientId++, "DKI02241963", "Kizzie", "Terese", "Dearman", new Date("02/24/1963"), "Female", "(346) 790-0976", "k.dearman@gmail.com", "554 Lincoln Road", "Inman", "South Carolina", "29349", "Hispanic/Latino", "Other", "Single", "English", "Scarlet Kathoven", "(154) 094-6735", "Other", "NKDA"))

  _patients.push(new Patient(_patientId++, "LHI03071944", "Hildegard", "", "Levens", new Date("03/07/1944"), "Male", "(987) 876-0434", "h.levens@icloud.com", "79 Oak Valley Avenue", "Eden Prairie", "Minnesota", "55347", "Hispanic/Latino", "Other", "Widow", "Spanish", "Jackie Sovanthovanga", "(967) 349-9215", "Grandaughter", "High blood pressure"))

  console.log("From my service: ", _patients);

  // Get all 
  this.getPatients = function() {
    return _patients
  }

  // Get one by ID
  this.getPatientById = function(id) {
    if (id == "" || id == undefined || id == null) {
      var patient = []
      return patient
    }
    else {
      for (var i = 0; i < _patients.length; i++) {
        if (_patients[i].id == id) {
          return _patients[i]
        }
      }
    }
  }

  // Create
  this.addPatient = function(patient) {
    patient.id = _patientId++
    _patients.unshift(patient)
    $state.go("patients")
  }

  // Update
  this.updatePatient = function(patient) {
    var result = confirm("Are you sure you would like to update this patient's profile?");
    if (result == true) {
      for (var i = 0; i < _patients.length; i++) {
        if (_patients[i].id == patient.id) {
          _patients.splice(i, 1, patient)
          $state.go("patient", { id: patient.id })
        }
      }
    }
    else {
      $state.go("patientsUpdate", { id: patient.id });
    }
  }

  // Delete
  this.deletePatient = function(id) {
    var result = confirm("Are you sure you want to delete this patient?");
    if (result == true) {
      for (var i = 0; i < _patients.length; i++) {
        if (_patients[i].id == id) {
          _patients.splice(i, 1)
          $state.go("patients")
        }
      }
    }
    else {
      $state.go("patient");
    }
  }
})