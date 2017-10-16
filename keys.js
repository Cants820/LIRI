// console.log('Twitter Loaded');

var Twitter = require('twitter'); //calls twitter module from npm

var twitterKeys = new Twitter ({ //move later to keys.js
  consumer_key: '3Kc3UxcNZJJwyLQkvFQAJ8DYA',
  consumer_secret: 'P9BIQiW1c7EstluQKBnVHRm0IOcTXK5Nm7CYP0q2KSk8zmumU8',
  access_token_key: '1353115074-b55Z0wPPrDcS4X4s41mqWsw0dnqG3HXPm1Bo5fx',
  access_token_secret: 'L5LWsszwLW8W4AG2mMOolBfdjmw1D20tBzBZbdkpHO50t',
});

var Spotify = require('node-spotify-api');
    
    var spotifyKeys = new Spotify({
      id: "7f842cae60b24371943a9a4e0e3c408d",
      secret: "d46515a30dfe4068a99f92ec2dfe8c7c"
    });
   


module.exports ={
    twitterKeys: twitterKeys,
    spotifyKeys: spotifyKeys,
} 