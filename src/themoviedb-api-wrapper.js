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
let DEBUG_Wrapper = false

function DEBUGGER(msg) {
    if (DEBUG_Wrapper === true) {
        console.log(msg)
    }
}

let TheMovieDB_Wrapper_APIKey = null;

// The API Wrapper
function TheMovieDB_Wrapper(query, query_type, max_actors, season, episode) {
    // if query was provided 


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
        if (!query) {
          DEBUGGER("Error -  Query Name Not Provided")
          return resolve(setErrorMsg("Query Name Not Provided"))
        }
         
              if (!query_type) {
          DEBUGGER("Error -  Query Type Not Provided")
          return resolve(setErrorMsg("Query Type Not Provided"))
        }
      
      
      // Valid query types 
       if (query_type.toLowerCase() != "movie" && query_type.toLowerCase() !="tv"  && query_type.toLowerCase() !="reviews"  && query_type.toLowerCase() !="similar"  && query_type.toLowerCase() !="episode"  && query_type.toLowerCase() !="actor"  && query_type.toLowerCase() !="collection"){
         DEBUGGER("Error -  Query Type Not Valid")
          return resolve(setErrorMsg("Query Type Not Valid"))
       }

        if (query != undefined) {
            // parse results
            let name = tnp(query).title
            let year = ``
            let cast = "credits"
            // if year was found in query or even torrent name
            if (tnp(query).year) {
                year = `&year=${tnp(query).year}`
            }

            let episode_search = false;
            
            let similar_search = false;

            let review_search = false;
          
            if (query_type.toLowerCase() === "actor") {
                query_type = "person"
            }

            if (query_type.toLowerCase() === "collection") {
                query_type = "collection"
            }
          if (query_type.toLowerCase() === "similar") {
            if(!max_actors){
              DEBUGGER("Error - Query Type Is Not Provided")
              return resolve(setErrorMsg("Query Type Is Not Provided"))
            } else{ 
              if (max_actors.toLowerCase() != "tv" && max_actors.toLowerCase() != "movie"){
                 DEBUGGER("Error - Query Type Is Not Provided, Must Be TV or Movie")
              return resolve(setErrorMsg("Query Type Is Not Valid"))
              }
                query_type = max_actors
             similar_search = true;
         
            }
          }
          
          if (query_type.toLowerCase() === "reviews"){
              if(!max_actors){
              DEBUGGER("Error - Query Type Is Not Provided")
              return resolve(setErrorMsg("Query Type Is Not Provided"))
            } else{ 
                if (max_actors.toLowerCase() != "movie" && max_actors.toLowerCase() !="tv"){
                 DEBUGGER("Error - Query Type Is Not Provided, Must Be TV or Movie")
              return resolve(setErrorMsg("Query Type Is Not Valid"))
              } 
                query_type = max_actors
             review_search = true;
            }
            
          }
          
            if (query_type.toLowerCase() === "episode") {
                query_type = "tv"
                episode_search = true
                if (!season) {
                    if (tnp(query).season) {
                        season = tnp(query).season
                    } else {
                        DEBUGGER("Error - Season Number Not Provided or Found")
                     return resolve(setErrorMsg("Season Number Not Provided or Found"))
                    }

                }

                if (!episode) {
                    if (tnp(query).episode) {
                        episode = tnp(query).episode
                    } else {
                    DEBUGGER("Error - Episode Number Not Provided or Found")
                    return  resolve(setErrorMsg("Episode Number Not Provided or Found"))
                    }
                }
            }


            DEBUGGER(`Searching for ${name}, Year: ${year}, Type: ${query_type}`)
            // End Point To Send Request Too 
            let Movie_JSON = []
            let Actor_JSON = []
            // Search for query name 
            fetchDetails(`https://api.themoviedb.org/3/search/${query_type}?api_key=${TheMovieDB_Wrapper_APIKey}&language=en-US&query=${name}${year}`).then(function(search_results) {

                if (search_results.total_results === 0) {
                    DEBUGGER(`No results found for ${query}`)
                    return resolve(setErrorMsg("No results found"))
                } else {


                    if (query_type.toLowerCase() === "collection") {
                        return resolve(search_results.results)
                    }

                    if (query_type.toLowerCase() === "person") {
                        return resolve(search_results.results)
                    }

                    DEBUGGER(`Found a ID For ${name}`)
                    // ID to find more details
                    let MovieID = search_results.results[0].id

                    let episode_query = ""

                    if (episode_search === true) {
                        episode_query = `/season/${season}/episode/${episode}`
                    }
                  
                    if (similar_search === true){
                      episode_query = `/similar`
                    }

                  if (review_search === true){
                    episode_query = `/reviews`
                  }
                    let fetchMediaInfoURL = `https://api.themoviedb.org/3/${query_type}/${MovieID}${episode_query}?&api_key=${TheMovieDB_Wrapper_APIKey}`

                    // Search extra info about query name (endpoint includes genres etc..) 
                    fetchDetails(fetchMediaInfoURL).then(function(query_results) {
console.log(fetchMediaInfoURL)
                        DEBUGGER(`Success - Found info for ${name} using ID: ${MovieID}`)

                        Movie_JSON.push(query_results)
                      
                      if (similar_search === true) {
                         if (query_results.total_results === 0) {
                    DEBUGGER(`No results found for ${query}`)
                    return resolve(setErrorMsg("No results found"))
                         }
                        return resolve(query_results)
                        
                      }
                      
                      if (review_search  === true) {
                         if (query_results.total_results === 0) {
                    DEBUGGER(`No results found for ${query}`)
                    return resolve(setErrorMsg("No results found"))
                         }
                   return resolve(query_results)  
                        
                      }
                        
                        // Search actor / cast info about query name 
                        fetchDetails(`https://api.themoviedb.org/3/${query_type}/${MovieID}/${cast}?&api_key=${TheMovieDB_Wrapper_APIKey}`).then(function(query_results_actors) {
                            DEBUGGER(`Attempting To Find Actors For ${name}`)
                            let actor_counter = 0
                            if (!max_actors) {
                                // Default Max Actors To Return. 
                                max_actors = 5
                            }
                            if (query_results_actors.cast.length != 0) {
                                DEBUGGER(`Actors / Cast Were Found For ${name}`)
                                while (actor_counter != max_actors) {




                                    Actor_JSON.push(query_results_actors.cast[actor_counter])
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
export async function fetch_tmdb_info(query, query_type, max_actors, season, episode) {
    const Media_Info = await TheMovieDB_Wrapper(query, query_type, max_actors, season, episode);
    return Media_Info

}
