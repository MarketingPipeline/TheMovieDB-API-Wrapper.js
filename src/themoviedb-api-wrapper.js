/**!
 * @license TheMovieDB-API-Wrapper.js - A JavaScript library for easily fetching info from TheMovieDataBase API. 
 * LICENSED UNDER MIT LICENSE
 * MORE INFO CAN BE FOUND AT https://github.com/MarketingPipeline/TheMovieDB-API-Wrapper.js/
 */

/* TO-DO
For anybody reading this wanting to improve this script. Here are some things that could be improved or added.

- [ ] More Routes To Search 
  - [ ] Search TV or Movie by ID
- [ ] Clean variable names etc..   
- [ ] Make a class for this.. 

*/ 



// Regex / Name Parser For Torrents
import tnp from "https://cdn.skypack.dev/torrent-name-parser@0.6.5";


// To enable console log debugging - set to true. 
let DEBUG_Wrapper = true

function DEBUGGER(msg) {
    if (DEBUG_Wrapper === true) {
        console.log(msg)
    }
}

let TheMovieDB_Wrapper_APIKey = null;

// The API Wrapper
function TheMovieDB_Wrapper(arg1, arg1_type, arg3, arg4, arg5) {
    // if arg1 was provided 
console.log(arg1_type)

    return new Promise(resolve => {

        // function to return error messages 
        function setErrorMsg(msg){
          let error = {"tmdb_api_error" : msg}
          return error
        }
      
        if (TheMovieDB_Wrapper_APIKey === null) {
           DEBUGGER("Error -  TheMovieDB API Key Not Provided")
          return resolve(setErrorMsg("TheMovieDB API Key Not Provided"))
        }
        if (!arg1) {
          DEBUGGER("Error -  Query Name Not Provided")
          return resolve(setErrorMsg("Query Name Not Provided"))
        }
         
              if (!arg1_type) {
          DEBUGGER("Error -  Query Type Not Provided")
          return resolve(setErrorMsg("Query Type Not Provided"))
        }
      
      
      // Valid arg1 types 
        
       // make arg lowercase
        arg1_type = arg1_type.toLowerCase()
      
       if (arg1_type != "movie" && arg1_type !="tv"  && arg1_type !="reviews"  && arg1_type !="similar"  && arg1_type !="episode"  && arg1_type !="actor"  && arg1_type !="collection"  && arg1_type !="recommendations"){
         DEBUGGER("Error -  Query Type Not Valid")
          return resolve(setErrorMsg("Query Type Not Valid"))
       }

        if (arg1 != undefined) {
            // parse results
            let name = tnp(arg1).title
            let year = ``
            let cast = "credits"
            // if year was found in arg1 or even torrent name
            if (tnp(arg1).year) {
                year = `&year=${tnp(arg1).year}`
            }

            let episode_search = false;
            
            let similar_search = false;
          
            let recommendation_search = false;

            let review_search = false;
          
            if (arg1_type.toLowerCase() === "actor") {
                arg1_type = "person"
            }

            if (arg1_type.toLowerCase() === "collection") {
                arg1_type = "collection"
            }
          if (arg1_type.toLowerCase() === "similar" || arg1_type.toLowerCase() === "recommendations") {
         
            if(!arg3){
              DEBUGGER("Error - Query Type Is Not Provided")
              return resolve(setErrorMsg("Query Type Is Not Provided"))
            } else{ 
              if (arg3.toLowerCase() != "tv" && arg3.toLowerCase() != "movie"){
                 DEBUGGER("Error - Query Type Is Not Provided, Must Be TV or Movie")
              return resolve(setErrorMsg("Query Type Is Not Valid"))
              }
              
                if(arg1_type.toLowerCase() == "recommendations"){
             recommendation_search = true;
         
            }
              
              if(arg1_type.toLowerCase() == "similar"){
             similar_search = true;
            }  
                arg1_type = arg3
          
              
              
              
            }
          }
          
          if (arg1_type.toLowerCase() === "reviews"){
              if(!arg3){
              DEBUGGER("Error - Query Type Is Not Provided")
              return resolve(setErrorMsg("Query Type Is Not Provided"))
            } else{ 
                if (arg3.toLowerCase() != "movie" && arg3.toLowerCase() !="tv"){
                 DEBUGGER("Error - Query Type Is Not Provided, Must Be TV or Movie")
              return resolve(setErrorMsg("Query Type Is Not Valid"))
              } 
                arg1_type = arg3
             review_search = true;
            }
            
          }
          
            if (arg1_type.toLowerCase() === "episode") {
                arg1_type = "tv"
                episode_search = true
                if (!arg4) {
                    if (tnp(arg1).arg4) {
                        arg4 = tnp(arg1).arg4
                    } else {
                        DEBUGGER("Error - Season Number Not Provided or Found")
                     return resolve(setErrorMsg("Season Number Not Provided or Found"))
                    }

                }

                if (!arg5) {
                    if (tnp(arg1).arg5) {
                        arg5 = tnp(arg1).arg5
                    } else {
                    DEBUGGER("Error - Episode Number Not Provided or Found")
                    return  resolve(setErrorMsg("Episode Number Not Provided or Found"))
                    }
                }
            }


            DEBUGGER(`Searching for ${name}, Year: ${year}, Type: ${arg1_type}`)
            // End Point To Send Request Too 
            let Movie_JSON = []
            let Actor_JSON = []
            // Search for arg1 name 
            fetchDetails(`https://api.themoviedb.org/3/search/${arg1_type}?api_key=${TheMovieDB_Wrapper_APIKey}&language=en-US&query=${name}${year}`).then(function(search_results) {

                if (search_results.total_results === 0) {
                    DEBUGGER(`No results found for ${arg1}`)
                    return resolve(setErrorMsg("No results found"))
                } else {


                    if (arg1_type.toLowerCase() === "collection") {
                        return resolve(search_results.results)
                    }

                    if (arg1_type.toLowerCase() === "person") {
                        return resolve(search_results.results)
                    }

                    DEBUGGER(`Found a ID For ${name}`)
                    // ID to find more details
                    let MovieID = search_results.results[0].id

                    let fetch_extra_details_endpoint = ""

                    if (episode_search === true) {
                        fetch_extra_details_endpoint = `/season/${arg4}/episode/${arg5}`
                    }
                  
                    if (similar_search === true){
                      fetch_extra_details_endpoint = `/similar`
                    }
                  
                     if (recommendation_search === true){
                      fetch_extra_details_endpoint = `/recommendations`
                      console.log("hello")
                    }
                  

                  if (review_search === true){
                    fetch_extra_details_endpoint = `/reviews`
                  
                  }
                    let fetchMediaInfoURL = `https://api.themoviedb.org/3/${arg1_type}/${MovieID}${fetch_extra_details_endpoint}?&api_key=${TheMovieDB_Wrapper_APIKey}`

                    // Search extra info about arg1 name (endpoint includes genres etc..) 
                    fetchDetails(fetchMediaInfoURL).then(function(arg1_results) {
console.log(fetchMediaInfoURL)
                        DEBUGGER(`Success - Found info for ${name} using ID: ${MovieID}`)

                        Movie_JSON.push(arg1_results)
                      
                      if (similar_search === true || recommendation_search === true) {
                         if (arg1_results.total_results === 0) {
                    DEBUGGER(`No results found for ${arg1}`)
                    return resolve(setErrorMsg("No results found"))
                         }
                        return resolve(arg1_results)
                        
                      }
                      
                      if (review_search  === true) {
                        console.log(fetchMediaInfoURL)
                         if (arg1_results.total_results === 0) {
                    DEBUGGER(`No results found for ${arg1}`)
                    return resolve(setErrorMsg("No results found"))
                         }
                   return resolve(arg1_results)  
                        
                      }
                        
                        // Search actor / cast info about arg1 name 
                        fetchDetails(`https://api.themoviedb.org/3/${arg1_type}/${MovieID}/${cast}?&api_key=${TheMovieDB_Wrapper_APIKey}`).then(function(arg1_results_actors) {
                            DEBUGGER(`Attempting To Find Actors For ${name}`)
                            let actor_counter = 0
                            if (!arg3) {
                                // Default Max Actors To Return. 
                                arg3 = 5
                            }
                            if (arg1_results_actors.cast.length != 0) {
                                DEBUGGER(`Actors / Cast Were Found For ${name}`)
                                while (actor_counter != arg3) {




                                    Actor_JSON.push(arg1_results_actors.cast[actor_counter])
                                    actor_counter += 1

                                }
                            }
                            // No actors were found!
                            else {
                                Actor_JSON.push({
                                    "actors": null
                                })
                                DEBUGGER(`No Actors / Cast Were Found For ${name}`)
                            }
                            return resolve([Movie_JSON, Actor_JSON])

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
                    } else { // API Key Error etc. 
                        const jsonResponse = await response.json();
                        DEBUGGER(`Error - ${jsonResponse.status_message}`)
                    return resolve(setErrorMsg(jsonResponse.status_message))
                    }
                } catch (error) {
                    // something else went wrong... 
                    DEBUGGER(`Error - ${error.message}`)
                    return resolve(setErrorMsg(error.message))
                }
            }
        }
    });
}


// Function to set API key
export function tmdb_api_key(key) {
  TheMovieDB_Wrapper_APIKey = key
}

// Function to call the wrapper
export async function fetch_tmdb_info(arg1, arg1_type, arg3, arg4, arg5) {
    const Media_Info = await TheMovieDB_Wrapper(arg1, arg1_type, arg3, arg4, arg5);
    return Media_Info

}

tmdb_api_key("6b4357c41d9c606e4d7ebe2f4a8850ea")

/// Actor / Cast Info Only
fetch_tmdb_info("Notorious", "recommendations", "movie").then(function(search_results) {
    console.log(search_results)[1]
  });    
