var Trackster ={};

$(document).ready(function(){

  


  /*
    Given an array of track data, create the HTML for a Bootstrap row for each.
    Append each "row" to the container in the body to display all tracks. 
  */
 Trackster.renderTracks = function(tracks) {

  $('#results').empty();
  
// loop iriterating the function n requested times//

for ( i=0 ; i<tracks.length ; i++ ) {
let track=tracks[i];
let mediumAlbumArt=track.image[1]["#text"];
let trackinfo='<div class="container-fluid">'
+'<div id="mock-row" class="row form-inline" >'
+'<div  class="col-2"><a href="https://www.youtube.com/watch?v=eI_O5_tJ1hA&feature=youtu.be"><i class="far fa-play-circle fa-lg"></i></a></div>'
+'<div  class="col-4">'+i+'&nbsp;'+ track.name+'</div>' 
+'<div  class="col-2">'+track.artist+'</div>' 
+'<div  class="col-2"><img src='+mediumAlbumArt+'></div>'
+'<div  class="col-2">'+track.listeners+'</div>'
+'</div>';

$('#results').append(trackinfo); 
    
  }


};

      /*
      Given a search term as a string, query the LastFM API.
      Render the tracks given in the API query response.
      */

  
 

    $('#search-btn').click(function() {
  
     
    
      const title= $('input').val();
      
     
    
      Trackster.searchTracksByTitle = function( title) {
        const api_Key= 'd9b112d3110fd24c4e07b05eae2b3dc1';
         
        $.ajax( { 
          url:'http://ws.audioscrobbler.com/2.0/?method=track.search&track='+title+'&api_key='+api_Key+'&format=json',
          datatype:'json',
          success: function(response){
          Trackster.renderTracks(response.results.trackmatches.track);
          }         
        });   
      };
    
      Trackster.searchTracksByTitle(title);
    });
     

  

  
  
  
  
});

