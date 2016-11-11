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
            (rst)=>res.render("searchResult/searchResult",rst));
    })

    app.get('/artists/:id', function(req, res){


        spotifyClient.getArtistById(req.params.id,
            rst => {
                //let albums
                spotifyClient.getAlbumsByArtistId(req.params.id,
                    rst2 => res.render('artist', {
                        'name': rst.name,
                        'image': rst.images[1].url,
                        'albums': rst2
                    })
                )
            }
        )
    })
}