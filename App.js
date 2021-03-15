const express = require('express')
const app = express();
const Datastore = require('nedb')
const port = 800
const user_database = new Datastore('Login_info.db');
const score_database = new Datastore("Score_info.db")
current_user = null;

function setup(){
  app.listen(port, () => console.log(`Listening at ${port}`));

	//Base html page
	app.use(express.static('public'))

	//Game Urls
	app.use("/Game", express.static('Client'))
  app.use('/Game/Restart', express.static("Client/restart"))
  app.use("/Scoreboard", express.static("public/scoreboard"))

	//Login URLS
  app.use('/LOGIN/login/check_login', express.static('Login_sys/public/check'))
  app.use('/LOGIN', express.static('Login_sys/public/main'))
  app.use('/LOGIN/login', express.static('Login_sys/public/login'))
  app.use('/LOGIN/Signin', express.static('Login_sys/public/sign_in'))

	//Misc
	app.use(express.json( ))
  user_database.loadDatabase();
  score_database.loadDatabase();
}
setup()

app.get('/user_info_req', (request, response) => {
  user_database.find({type: 'user'}, (err, data) => {
    current_user = data
    response.json(data);
  })});

app.post('/user_info', (req, res) => {
  user_database.insert(req.body)
})

app.post('/current_user', (req, res) => {
  current_user = req.body
//  console.log(current_user);
})

app.get('/username_req', (request, response) => {
  if (current_user != null){
    response.json(current_user)
}})

app.post('/user_score', (req, res) => {
  if (req.body["user"] != "filler"){
    score_database.insert(req.body)
    console.log(req.body);
    return
    //check_score_db(req.body)
    //console.log(req.body);
  }})
//      /user_score_name
app.get('/score_req', (request, response) => {
  score_database.find({type: 'user'}, (err, data) => {
    //console.log(data);
    response.json(data);
  })});
