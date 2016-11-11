"use strict"
const API_URI = "https://api.spotify.com";


function Options(host,path,method) {
    this.method = method;
    this.host = host;
    this.path = path;
}
function spotifyOption(path){
    return new Options(API_URI, "/v1"+path,"GET");
}


exports.spotifyOptions=spotifyOption