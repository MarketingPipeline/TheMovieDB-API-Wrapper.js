# TheMovieDB-API-Wrapper.js
A JavaScript library for easily fetching ALL info about movies / tv including (genres & actors) & more via TheMovieDB API. 


## Example usage

You must provide a API key for TheMovieDB which can be found here.




How to search up movie info - 

When searching up a movie / film - any found media info & actor info  will be returned in seperated lists inside of a array. 


> Paramaters (Query, Type, Max Actors)


```js
/// Both arrays (Media Info & Actors Info)
FetchDataFrom_TheMovieDB("8 Mile", "movie",  2).then(function(search_results) {
    console.log(search_results)
  });
  
/// Media Info Only
FetchDataFrom_TheMovieDB("8 Mile", "movie",  2).then(function(search_results) {
    console.log(search_results)[0]
  });  
  
/// Actor / Cast Info Only
FetchDataFrom_TheMovieDB("8 Mile", "movie",  2).then(function(search_results) {
    console.log(search_results)[1]
  });    
```


A movie / film query name could look like the following example(s)

   
    Captain Russia
    Captain Russia (2014)
    Captain Russia The Summer Soldier (2014) 1080p BrRip x264 - YIFY
    
for more accurate results, a year should be provided in the query. 



How to search up TV info - 



When searching up a TV show - any found media info & actor info will be returned in seperated lists inside of a array. 


> Paramaters (Query, Type, Max Actors)


```js
/// Both arrays (Media Info & Actors Info)
FetchDataFrom_TheMovieDB("8 Mile", "movie",  2).then(function(search_results) {
    console.log(search_results)
  });
  
/// Media Info Only
FetchDataFrom_TheMovieDB("8 Mile", "movie",  2).then(function(search_results) {
    console.log(search_results)[0]
  });  
  
/// Actor / Cast Info Only
FetchDataFrom_TheMovieDB("8 Mile", "movie",  2).then(function(search_results) {
    console.log(search_results)[1]
  });    
```

A TV show query name could look like the following example(s)

   
    Captain Russia
    Captain Russia (2014)
    Captain Russia The Summer Soldier (2014) 1080p BrRip x264 - YIFY
    
for more accurate results, a year should be provided in the query. 


How to search up actor info -


> Paramaters (Person Name, Type)

```js
FetchDataFrom_TheMovieDB("Eminem", "actor").then(function(search_results) {
  console.log(search_results)
  });
```




How to search up movie collection info - 



```js
FetchDataFrom_TheMovieDB("Fast And Furious", "collection").then(function(search_results) {
  console.log(search_results)
  });
```



How to search up episode info - 

> Params - Query, Type, Max Actors, Season, Episode



A episode info query could look like the following example(s)

   
    Captain Russia
    Captain Russia (2014)
    Captain Russia The Summer Soldier (2014) 1080p BrRip x264 - YIFY
    
for more accurate results, a year should be provided in the query. 

```js
// Torrent Name
FetchDataFrom_TheMovieDB("Two and a Half Men S01 E01", "epsiode").then(function(search_results) {
  console.log(search_results)
  });

// Regular Name (with season and episodes as paramaters) 
FetchDataFrom_TheMovieDB("Two and a Half Men", "epsiode", 1, 5, 7).then(function(search_results) {
  console.log(search_results)
  });
  
```
