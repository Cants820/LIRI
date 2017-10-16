# LIRI - BOT

##Overview 
A Node app that pulls API calls based on user commands. A text-based SIRI application

##Motivation
To reinforce the basic concepts of Node.js like npm, fs, and process. Also to the run javascript through a terminal.

##Code Example

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


##Listing of Technologies Used
Node.js, 
