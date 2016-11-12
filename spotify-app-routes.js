"use strict"

const dependencies = require("./dependencies.js")
const spotifyClient = dependencies.spotifyClient;

exports.spotifyRoutes=function(app){

    app.get("/", (req,res,next)=>{
        res.render("homeView/home");
    })

    app.get("/search/:artist/:page",function(req,res){

        spotifyClient.getArtistByName(req.params.artist,req.params.page,
            (rst)=>{
                if(rst.artists.previous != null)
                    rst['left']=true;
                if(rst.artists.next != null)
                    rst['right']=true;

                rst['first']=true;
                rst.nextPage=+req.params.page+ +1;
                rst.previousPage=+req.params.page-1

                rst.searchName = req.params.artist;
                rst.lastPage =Math.floor(rst.artists.total/20);
                res.render("searchResult/searchResult",rst)
            });
    })

    app.get("/search/:artist",function(req,res){

        spotifyClient.getArtistByName(req.params.artist,1,
            (rst)=>{
                if(rst.artists.previous != null)
                    rst['left']=true;
                if(rst.artists.next != null)
                    rst['right']=true;
                rst.nextPage=2;
                rst['first']=false;
                rst.searchName = req.params.artist;
                rst.lastPage =Math.floor(rst.artists.total/20);
                res.render("searchResult/searchResult",rst)
            });
    })
    app.get('/search', function(req, res) {
        res.redirect("search/"+req.query.artist);
    });



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