"use strict"
const dependencies = require("./dependencies.js");
const opt = dependencies.options.spotifyOptions
const api = dependencies.api.getResults;

function getArtistByName(query,callback) {
    api(new opt("/search?type=artist&q=" + query), (data)=> {
        callback(data);
    })
}

exports.getArtistByName = getArtistByName;