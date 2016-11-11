"use strict"

const dependencies = require("./dependencies.js")
const spotifyClient = dependencies.spotifyClient;

exports.spotifyRoutes=function(app){

    app.get("/", (req,res,next)=>{
        res.render("homeView/home");
    })

    app.get('/search', function(req, res) {
        res.redirect("search/"+req.query.artist);
    });

    app.get("/search/:artist",function(req,res){
        spotifyClient.getArtistByName(req.params.artist,
            (rst)=>console.log(rst));
    })
}