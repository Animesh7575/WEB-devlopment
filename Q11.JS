function saveDetails() {
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;
  
    var userDetails = {
      name: name,
      email: email,
      age: age
    };
  
    var existingDetailsJSON = localStorage.getItem('userDetails');

    var existingDetails = existingDetailsJSON ? JSON.parse(existingDetailsJSON) : {};

    existingDetails[name] = userDetails;
  
    var updatedDetailsJSON = JSON.stringify(existingDetails);

    localStorage.setItem('userDetails', updatedDetailsJSON);

    alert('User details saved successfully!');
  }