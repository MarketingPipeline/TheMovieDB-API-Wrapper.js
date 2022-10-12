# TheMovieDB-API-Wrapper.js
A JavaScript library for easily fetching ALL info about movies / tv including (genres & actors) via TheMovieDB API. 


## Example usage

You must provide a API key for TheMovieDB & a query name. 

A query names could look like the following 

   
    Captain Russia
    Captain Russia (2014)
    Captain Russia The Summer Soldier (2014) 1080p BrRip x264 - YIFY
    
for more accurate results, a year should be provided somewhere in the query. 


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



How to search up actor info -


> Paramaters (Person Name, Type)

```js
FetchDataFrom_TheMovieDB("Eminem", "actor").then(function(search_results) {
  console.log(search_results)
  });
```




How to search up movie collection info - 



```
FetchDataFrom_TheMovieDB("Fast And Furious", "collection").then(function(search_results) {
  console.log(search_results)
  });
```
