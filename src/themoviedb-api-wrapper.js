
// Regex / Name Parser For Torrents
import tnp from "https://cdn.skypack.dev/torrent-name-parser@0.6.5";

function test(movie_name,  type, max_actors) {
  // if query was provided 
  if(movie_name !=undefined){
   // parse results
  let name =  tnp(movie_name).title
   let year = ``
   let cast = "cast"
   // if year was found in query or even torrent name
  if(tnp(movie_name).year){
   year = `&year=${tnp(movie_name).year}`
  }  
    
  if(type != "movie"){
     type= "tv"
     cast = "credits"
  }
  
    // End Point To Send Request Too
 let FinalEndPoint = `https://api.themoviedb.org/3/search/${type}?api_key=6b4357c41d9c606e4d7ebe2f4a8850ea&language=en-US&query=${name}${year}`   
 let Movie_JSON = []
    
getDetails(FinalEndPoint).then(function(search_results) {
  
  if(search_results.total_results === 0){
    return console.log("No Results Found")
  } else{ 
    
    // The Movie or TV Show ID to find more details
 var MovieID = search_results.results[0].id
  
var endpoint1 = `https://api.themoviedb.org/3/${type}/${MovieID}?&api_key=6b4357c41d9c606e4d7ebe2f4a8850ea`  
 getDetails(endpoint1).then(function(query_results) {
  
   Movie_JSON.push(query_results)

 getDetails(`https://api.themoviedb.org/3/${type}/${MovieID}/${cast}?&api_key=6b4357c41d9c606e4d7ebe2f4a8850ea`).then(function(query_results_actors) {
 
    var actor_counter = 0 
   if (!max_actors){
     max_actors = 5
   }
    while (actor_counter !=  max_actors){



      
   Movie_JSON.push(query_results_actors.cast[actor_counter])
  actor_counter += 1
 
    }  
      
 
     console.log(Movie_JSON)
   
    });     
});
  }
});



async function getDetails(endpoint) {
    try {
      const response = await fetch(endpoint, {
        mode: 'cors'
      })
      if (response.ok) {
       // things went fine - returning query data! 
        const jsonResponse = await response.json();
        return jsonResponse
      } else{
        // API error or etc..
        const jsonResponse = await response.json();
        return jsonResponse.status_message
      }
    } catch(error) {
     // something else went wrong... 
      return error.message
    }
  }
  } else{
    console.log("Error - Query Name Not Provided")
  }

}

test("The Simpsons", "tv",  2)  //
