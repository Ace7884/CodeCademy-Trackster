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
          Trackster.renderTracks(response.results.trackmatches.track);
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
  Trackster.renderTracks = function(input) {

   
    
// loop iriterating the function n requested times//
for ( i=0 ; i<input.length ; i++ ) {

  let trackinfo='<div id="mock-row">'+'<a href="https://www.youtube.com/watch?v=eI_O5_tJ1hA&feature=youtu.be">'+
  '<i class="far fa-play-circle fa-lg"></i>'+'</a>'+
  '     '+(i+1)+'      '+input[i].name+'              '+input[i].artist+'                       Album art                       '+input[i].listeners+'                      Length</div>'; 



          console.log(input[i]);
          $('.track-list').append(trackinfo);
         
      
    }


  };
  
  
  
});