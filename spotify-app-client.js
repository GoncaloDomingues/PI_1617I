"use strict"
const dependencies = require("./dependencies.js");
const opt = dependencies.options.spotifyOptions
const api = dependencies.api.getResults;

function getArtistByName(query,offset,callback) {
    if(offset!==1)
        offset = +offset+ +19
    else offset =0;
    api(new opt("/search?type=artist&offset="+offset+"&q=" + query), (data)=> {
        callback(data);
    })
}

function getArtistById(id ,callback) {
    api(new opt("/artists/" + id), data => callback(data))
}

function getAlbumsByArtistId(id, callback) {
    api(new opt("/artists/" + id + "/albums"), data => callback(data))
}

exports.getArtistByName = getArtistByName;
exports.getArtistById = getArtistById
exports.getAlbumsByArtistId = getAlbumsByArtistId