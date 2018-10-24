$(document).ready(function(){

  const api_Key= 'd9b112d3110fd24c4e07b05eae2b3dc1';
 

    $('#search-btn').click(function() {
  


     const input= $('input').val(); 
    
     
      /*
      Given a search term as a string, query the LastFM API.
      Render the tracks given in the API query response.
      */
     
    
      Trackster.searchTracksByTitle = function( input) {
        $.ajax( { 
          url:'http://ws.audioscrobbler.com/2.0/?method=track.search&track='+input+'&api_key='+api_Key+'&format=json',
          datatype:'json',
          success: function(response){
          console.log(response.results.trackmatches.track);
          }         
        });   
      }
    
      Trackster.searchTracksByTitle(input);
    });
     

  var Trackster = {};

  /*
    Given an array of track data, create the HTML for a Bootstrap row for each.
    Append each "row" to the container in the body to display all tracks. 
  */
  Trackster.renderTracks = function(tracks) {

    let trackData=[response.results.trackmatches.track];
    
    for ( let i = 0 ; i<=trackData.length ; i++) {

      

    }

  
  };
  
  
  




});


