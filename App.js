const express = require('express')
const app = express();
const Datastore = require('nedb')
const port = 800
const database = new Datastore('Login_info.db');

function setup(){
  app.listen(port, () => console.log(`Listening at ${port}`));

	//Base html page
	app.use(express.static('public'))

	//Game Urls
	app.use("/Game", express.static('Client'))

	//Login URLS
  app.use('/LOGIN', express.static('Login_sys/public/main'))
  app.use('/LOGIN/login', express.static('Login_sys/public/login'))
  app.use('/LOGIN/Signin', express.static('Login_sys/public/sign_in'))

	//Misc
	app.use(express.json( ))
  database.loadDatabase();
}
setup()

app.get('/user_info_req', (request, response) => {
  database.find({type: 'user'}, (err, data) => {
    response.json(data);
  });
});
app.post('/user_info', (req, res) => {
  database.insert(req.body)
})
