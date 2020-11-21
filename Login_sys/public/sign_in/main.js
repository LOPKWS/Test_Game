



function change_url(pass){
  x = document.URL;

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
  }
}


//Setting na function nto handle the submit button being pressed
const submit = (ev) => {
  //Preventing defualt action of the document when the
  //submit button is clicked
  ev.preventDefault();
  //Assigning the values of the inputs fields to variable
  //So I can easily use them
  ps = document.getElementById('Pass').value
  us = document.getElementById('User').value

  //Creating a data object to hold the user data
  let data = {
    user: us,
    pass: ps,
    //Only reason for this is for easy extraction from the
    //database later
    type: 'user'
  }

  //Setting the options for the fetch function in a variable
  //for readability and easy malipulation
  options = {
    method: 'POST',
    headers: {"Content-Type": 'application/json'},
    body: JSON.stringify(data)
  }

  //Sending the information to the server
  //Through the url user info
  fetch('/user_info', options)
  //Ressting the document form input fields
  //console.log('p','','u','');
  if (ps != "" || us != ""){
    //alert('help')
    change_url(true)
  }
  document.forms[0].reset()
}

//Checking if the submit button clicked
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('bt').addEventListener('click', submit)
})
