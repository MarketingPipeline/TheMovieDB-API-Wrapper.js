// Regex / Name Parser For Torrents
import tnp from "https://cdn.skypack.dev/torrent-name-parser@0.6.5";

let DEBUG_Wrapper = true
function DEBUGGER(msg){
  if(DEBUG_Wrapper === true){
    console.log(msg)
  }
}
function TheMovieDB_Wrapper(movie_name,  type, max_actors, season, episode) {
  // if query was provided 
  
  
  return new Promise(resolve => {
  
     if(typeof TheMovieDB_Wrapper_APIKey === 'undefined'){
     return console.log("Error - TheMovieDB API Key Not Provided")
   }
         if(!movie_name){
   return console.log("Error - Query Name Not Provided")
  }
   
   
  if(movie_name !=undefined){
   // parse results
  let name =  tnp(movie_name).title
   let year = ``
   let cast = "credits"
   // if year was found in query or even torrent name
  if(tnp(movie_name).year){
   year = `&year=${tnp(movie_name).year}`
  }  
 
let episode_search = false
    
    if(type.toLowerCase() === "actor"){
        type= "person"
    }
      
         if (type.toLowerCase() === "collection"){
      type= type
    } 
    if (type.toLowerCase() === "episode"){
      type= "tv"
      episode_search = true
       if(!season){
   return console.log("Error - Season Number Not Provided")
  }
      
           if(!episode){
   return console.log("Error - Episode Number Not Provided")
  }
    }
    
     
  DEBUGGER(`Searching for ${name}, Year: ${year}, Type: ${type}`)
    // End Point To Send Request Too 
 let Movie_JSON = []
 let Actor_JSON = []
    
fetchDetails(`https://api.themoviedb.org/3/search/${type}?api_key=${TheMovieDB_Wrapper_APIKey}&language=en-US&query=${name}${year}`).then(function(search_results) {
  
  if(search_results.total_results === 0){
    return console.log("No Results Found")
  } else{ 


     if (type.toLowerCase() === "collection"){
         return resolve(search_results.results)
     }
    
      if(type.toLowerCase() === "person"){
       return resolve(search_results.results)
      }
    
     DEBUGGER(`Found a ID For ${name}`)
    // ID to find more details
 var MovieID = search_results.results[0].id
  
 let episode_query = ""
 
    if(episode_search === true){
      episode_query =  `/season/${season}/episode/${episode}`
    }
 
  let fetchMediaInfoURL =  `https://api.themoviedb.org/3/${type}/${MovieID}${episode_query}?&api_key=${TheMovieDB_Wrapper_APIKey}`
      

 fetchDetails(fetchMediaInfoURL).then(function(query_results) {
  
   DEBUGGER(`Success - Found info for ${name} using ID: ${MovieID}`)
   
   Movie_JSON.push(query_results)

   fetchDetails(`https://api.themoviedb.org/3/${type}/${MovieID}/${cast}?&api_key=${TheMovieDB_Wrapper_APIKey}`).then(function(query_results_actors) {
     DEBUGGER(`Attempting To Find Actors For ${name}`)
    var actor_counter = 0 
   if (!max_actors){
     max_actors = 5
   }
   if(query_results_actors.cast.length != 0){
       DEBUGGER(`Actors / Cast Were Found For ${name}`)
    while (actor_counter !=  max_actors){



      
   Actor_JSON.push(query_results_actors.cast[actor_counter])
  actor_counter += 1
 
    }  
   } 
   // only here for debugging purposes... leave it. 
    else{
      Actor_JSON.push({"actors":null})
       DEBUGGER(`No Actors / Cast Were Found For ${name}`)
   }
     resolve( [Movie_JSON, Actor_JSON])
   
    });     
   
    
});
  }
});



async function fetchDetails(endpoint) {
    try {
      const response = await fetch(endpoint, {
        mode: 'cors'
      })
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse
      } else{
        const jsonResponse = await response.json();
       resolve(jsonResponse.status_message)
      }
    } catch(error) {
     
      resolve(error.message)
    }
  }
  }
 });
}

  // Example Usage
async function FetchDataFrom_TheMovieDB(movie_name,  type, max_actors, season, episode) {
  const Media_Info = await TheMovieDB_Wrapper(movie_name,  type, max_actors,  season, episode);
 return Media_Info
  
}

FetchDataFrom_TheMovieDB("Rick And Morty", "tv", 2);
//
