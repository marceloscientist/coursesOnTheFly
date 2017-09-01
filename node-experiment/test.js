var filesYo = require('fs'); //module fs
var https = require('https'); //module https

filesYo.writeFile(__dirname + "/index.html","<h1>HTML rocks</h1>"); //fs function 


var dogUrl = "https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg";
var dogFile = filesYo.createWriteStream(__dirname + "/node-dog.jpg"); //http function 
var request = https.get(dogUrl, function(response) {
	response.pipe(dogFile);
});
