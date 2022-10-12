 import tnp from "https://cdn.skypack.dev/torrent-name-parser@0.6.5";

function test(movie_name,  max_actors) {
  if(movie_name !=undefined){
    console.log(tnp(movie_name))
  let name =  tnp(movie_name).title
   let year = ``
  if(tnp(movie_name).year){
   year = `&year=${tnp(movie_name).year}`
  }  
    
 let FinalEndPoint = `https://api.themoviedb.org/3/search/movie?api_key=6b4357c41d9c606e4d7ebe2f4a8850ea&language=en-US&query=${name}${year}`   
 let Movie_JSON = []
    
getDetails(FinalEndPoint).then(function(result) {
  
  if(result.total_results === 0){
    return console.log("No Results Found")
  } else{ 
    
    var MovieID = result.results[0].id
  
var endpoint1 = `https://api.themoviedb.org/3/movie/${MovieID}?&api_key=6b4357c41d9c606e4d7ebe2f4a8850ea`  
 getDetails(endpoint1).then(function(result) {
  
   Movie_JSON.push(result)
var posterPaths = "https://image.tmdb.org/t/p/w370_and_h556_bestv2";
var backgroundPaths = "http://image.tmdb.org/t/p/w1280";
 getDetails(`https://api.themoviedb.org/3/movie/${MovieID}/casts?&api_key=6b4357c41d9c606e4d7ebe2f4a8850ea`).then(function(result) {
    var actor_counter = 0 
   if (!max_actors){
     max_actors = 5
   }
    while (actor_counter !=  max_actors){



      
   Movie_JSON.push(result.cast[actor_counter])
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
        const jsonResponse = await response.json();
        return jsonResponse
      } else{
        const jsonResponse = await response.json();
        return jsonResponse.status_message
      }
    } catch(error) {
      return error.message
    }
  }
  } else{
    console.log("Error - Query Name Not Provided")
  }

}

test("The Matrix", 2)  //
