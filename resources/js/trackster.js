var Trackster = {};
const api_Key = 'd9b112d3110fd24c4e07b05eae2b3dc1';
$(document).ready(function() {
    $('#search-btn').click(function() {
        Trackster.searchTracksByTitle($('input').val());

    });

    // animates trackster while producting track results



$(document).ajaxStart(function (){
    $('h1').addClass('.load'); 
    }
); 

// if press return activate search function

    $('input').keydown(function(keyPressed) {
        if ( keyPressed.which === 13 ) {
            Trackster.searchTracksByTitle($('input').val());
        }
    });    
});

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks. 
*/
Trackster.renderTracks = function(tracks) {
    

    $('#results').empty();

    // loop iriterating the function n requested times//

    for (i = 0; i < tracks.length; i++) {
        let track = tracks[i];
        let mediumAlbumArt = track.image[1]["#text"];
        track.listeners = numeral(track.listeners).format('0,0');
        let htmlTrackInfo = '<div class="container-fluid">' +
            '<div id="mock-row" class="row form-inline" >' +
            '<div  class="col-2"><a href=" '+track.url+'" target="_blank"><i class="far fa-play-circle fa-lg"></i></a></div>' +
            '<div  class="col-4">' + i + '&nbsp;' + track.name + '</div>' +
            '<div  class="col-2">' + track.artist + '</div>' +
            '<div  class="col-2"><img src=' + mediumAlbumArt + '></div>' +
            '<div  class="col-2">' + track.listeners + '</div>' +
            '</div>';

        $('#results').append(htmlTrackInfo);

    }

};

/*
Given a search term as a string, query the LastFM API.
Render the tracks given in the API query response.
*/



    Trackster.searchTracksByTitle = function(title) {
        $.ajax({
            url: 'http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + '&api_key=' + api_Key + '&format=json',
            success: function(response) {
                $('h1').addClass('.load'); 
                Trackster.renderTracks(response.results.trackmatches.track);
                
            }
        });
    };





 