function change_url(pass){
  var x = document.URL;

  b = Array.from(x)
  c = ''
  for (let i = 0; i < 12; i++){
    b.pop()
  }
  for (let step = 0; step < b.length; step++){
    c[step] = b[step]
  }

  if (pass == true){
    var new_url = `${c}/Game`
    window.location.href = new_url;
  } else {
    var new_url = `${c}/LOGIN`
    window.location.href = new_url;

  }

}

//Creating a function to handle the submit event from
//the html file
const submit = (ev) => {
  //Preventing the defualt action of submitting a form
  ev.preventDefault();
  //After reading a shit ton a article I still don't know why this
  //has to be an async function
  async function authenticate(input_pass, input_user){
    //Getting all the user information from the server
    const response = await fetch('/user_info_req')
    //Converting the data from json to utf-8
    const db_data = await response.json()
    //Cycling throught all the user objects we got
    //from the database and checking if the password
    //is equal to the one that was inputted
    for (let step = 0; step < db_data.length; step++) {
      const pass = db_data[step].pass;
      if (pass == input_pass){
        //If the input password was equal to the password
        //of any of the preexisting users
        logged_in_pass = true
      } else {
        logged_in_pass = false
      }
      //NOTE: Should also check the username but was
      //focussed on the password
    }

    for (let step = 0; step < db_data.length; step++) {
      const user = db_data[step].user;
      if (user == input_user){
        //If the input password was equal to the password
        //of any of the preexisting users
        logged_in_user = true
      } else {
        logged_in_user = false
      }
      //NOTE: Should also check the username but was
      //focussed on the password
    }

    if (logged_in_pass == true || logged_in_user == true){
      change_url(true)
    } else {
      change_url(false)
    }
  }
  //Calling the authenticate function and passing in the value from the
  //password input field
  authenticate(document.getElementById('Pass').value, document.getElementById('User').value);
  document.forms[0].reset()

}
//Checking if the submit button clicked
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('bt').addEventListener('click', submit)
})
