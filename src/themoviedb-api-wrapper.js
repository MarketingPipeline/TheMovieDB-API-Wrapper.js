
function test(movie_name) {
  if(movie_name !=undefined){
getDetails(`https://api.themoviedb.org/3/search/movie?api_key=6b4357c41d9c606e4d7ebe2f4a8850ea&language=en-US&query=${movie_name}`).then(function(result) {
var MovieID = result.results[0].id
  
var endpoint1 = `https://api.themoviedb.org/3/movie/${result.results[0].id}?&api_key=6b4357c41d9c606e4d7ebe2f4a8850ea`  
 getDetails(endpoint1).then(function(result) {
  
   
var posterPaths = "https://image.tmdb.org/t/p/w370_and_h556_bestv2";
var backgroundPaths = "http://image.tmdb.org/t/p/w1280";
   
   for (const genre in result.genres){
      console.log(`${result.genres[genre].name}`)
   }
   getDetails(`https://api.themoviedb.org/3/movie/${MovieID}/casts?&api_key=6b4357c41d9c606e4d7ebe2f4a8850ea`).then(function(result) {
    var actor_count = 0 
    
    while (actor_count != 5){



      
   console.log(result.cast[actor_count].name)
         console.log(`https://image.tmdb.org/t/p/w500${result.cast[actor_count].profile_path}`)
  actor_count += 1
 
    }  
      
    });     
});

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


 test("The Matrix")  //
