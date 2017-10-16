console.log("Welcome to LIRI Bot");


var inquirer = require("inquirer");

var keys = require('./keys.js');  //imports keys in 
 
//var userInput = process.argv[2];



//input commands
inquirer.prompt([
  {
    type: "list",
    name: "LIRIBotCommands",
    message: "Please input a Command",
    choices: ["my-tweets","spotify-this-song","movie-this","do-what-it-says"],
  },

]).then(function(command) {

  if(command.LIRIBotCommands === "my-tweets") { //need to refer to the prompt object
    getTweet();
  }else if (command.LIRIBotCommands === "spotify-this-song") {
    
    inquirer.prompt([
    {
      type: "input",
      name: "enterSongName",
      message: "please enter song name ?"
    }
    ]).then(function(songName) {
      getSpotify(songName.enterSongName);
    });


  }else if (command.LIRIBotCommands === "movie-this") {
    
    inquirer.prompt([
    {
      type: "input",
      name: "enterMovieName",
      message: "please enter movie name?"
    }
    ]).then(function(movieName) {
      
      getIMDB(movieName.enterMovieName);
    });


  }else {
    doWhatItSays();
  }




});







  //do what it says
  function doWhatItSays() {


  var fs = require("fs");

  fs.readFile("random.txt", "utf8", function(error,data){


  // console.log(data);

  var dataSplit = data.split(",");
  var dataSong = dataSplit[1];
  console.log(dataSong);

  getSpotify(dataSong);


  });


}


//call IMDB API
function getIMDB(movieName) {

  var request = require("request"); //calling the API
  var queryURL = "http://www.omdbapi.com/?apikey=40e9cece&t=" + movieName;


var request = require('request');

  request(queryURL, function (error, response, body) {
   
    if (!error && response.statusCode === 200) {

      // console.log("response " + response); 
      console.log("Title: " + JSON.parse(body).Title);
      console.log("Year: " + JSON.parse(body).Year);
      console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
      console.log("Rotten Tomatoes: " + JSON.parse(body).Ratings[1].Value);
      console.log("Produced: " + JSON.parse(body).Country);
      console.log("Language: " + JSON.parse(body).Language);
      console.log("Plot: " + JSON.parse(body).Plot);
      console.log("Actors: " + JSON.parse(body).Actors);
     // * Title of the movie.
     // * Year the movie came out.
     // * IMDB Rating of the movie.
     // * Rotten Tomatoes Rating of the movie.
     // * Country where the movie was produced.
     // * Language of the movie.
     // * Plot of the movie.
     // * Actors in the movie.
    }
  });
}

//call spotify API
function getSpotify(songName) {
    
    keys.spotifyKeys.search({ type: 'track' , query: songName }, function(err, data) {
      

        if (err) { //
           return console.log('Error occurred: ' + err);
          songName = "The-Sign";
          console.log("##############################");
          console.log("Artists: " + data.tracks.items[0].artists[0].name); //artists
          console.log("The Song's Name: " + data.tracks.items[0].name); //song name
          console.log("Preview Link: " + data.tracks.items[0].external_urls.spotify); //preview url
          console.log("Album: " + data.tracks.items[0].album.name); //album
          console.log("###############################");

        } else {

        console.log("##############################");
        console.log("Artists: " + data.tracks.items[0].artists[0].name); //artists
        console.log("The Song's Name: " + data.tracks.items[0].name); //song name
        console.log("Preview Link: " + data.tracks.items[0].external_urls.spotify); //preview url
        console.log("Album: " + data.tracks.items[0].album.name); //album
        console.log("###############################");
       
        }
    });

}



//calling tweeter API
function getTweet() {
             
      var params = {screen_name: 'CNN'};
      keys.twitterKeys.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {

          for(var i = 0; i < 20; i++) {
          
          console.log(tweets[i].text);
          console.log("######################");  
          }

        }
    });
}





