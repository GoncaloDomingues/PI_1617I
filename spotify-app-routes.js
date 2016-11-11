"use strict"

const dependencies = require("./dependencies.js")
const spotifyClient = dependencies.spotifyClient;

exports.spotifyRoutes=function(app){

    app.get("/", (req,res,next)=>{
        res.render("homeView/home");
    })

    app.get('/artist', function(req, res){
        spotifyClient.getArtistByName(req.query.artist,
            (rst)=>res.render("searchResults",{results:rst}));
    });
}