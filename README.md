# TheMovieDB-API-Wrapper.js

<div align="center">
<a href="https://github.com/MarketingPipeline/TheMovieDB-API-Wrapper.js"> 
<img height=350 alt="Repo Banner for TheMovieDB-API-Wrapper.js" src="https://capsule-render.vercel.app/api?type=waving&color=539bf5&height=300&section=header&text=TheMovieDB-API-Wrapper.js&fontSize=60&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Easily%20fetch%20info%20from%20TheMovieDB.org!&descAlignY=60&descAlign=50"></img></a>

</div>  
    
<p align="center">
  <b>A easy to use, pure vanilla JavaScript API wrapper for TheMovieDB</b>

  <br>
  <small> <b><i>Show your support!</i> </b></small>
  <br>
   <a href="https://github.com/MarketingPipeline/TheMovieDB-API-Wrapper.js">
    <img title="Star on GitHub" src="https://img.shields.io/github/stars/MarketingPipeline/TheMovieDB-API-Wrapper.js.svg?style=social&label=Star">
  </a>
  <a href="https://github.com/MarketingPipeline/TheMovieDB-API-Wrapper.js/fork">
    <img title="Fork on GitHub" src="https://img.shields.io/github/forks/MarketingPipeline/TheMovieDB-API-Wrapper.js.svg?style=social&label=Fork">
  </a>
   </p>  


A JavaScript library for easily fetching ALL info about movies / tv including (genres & actors) & more via TheMovieDB API. With support for finding media info for torrent names via [Torrent Name Parser](https://github.com/clems6ever/torrent-name-parser).




## Example usage

<!---You can view a demo of the API wrapper in use [here.](https://marketingpipeline.github.io/TheMovieDB-API-Wrapper.js/demo)-
-->







	
 <br>
<details><summary>How to use <b>TheMovieDB-API-Wrapper.js</b>:</summary>
 <br>		


	
<br>

> :warning: **Error Handling**: Any errors that occur will be returned inside a JSON key named <code>tmdb_api_error</code>

<br>	 



	
<details><summary>How to search up <b>Movie</b> info:</summary>
	
<br>	
	
You will require a API key from TheMovieDB and need to set your API key using <code>tmdb_api_key("YOUR API KEY")</code> with your valid API key
	
A movie / film query name could look like the following example(s)

   
    Captain America
    Captain America (2014)
    Captain America The Winter Soldier (2014) 1080p BrRip x264 - YIFY
    
for more accurate results, a year should be provided in the query. 

	
	
### Usage
	 
   
When searching up a movie / film - any found media info & actor info  will be returned in seperated lists inside of a array. 


> Paramaters (Query [REQUIRED], Type [REQUIRED], Max Actors)


```js
 /// API WRAPPER USAGE EXAMPLE	
 
 import {fetch_tmdb_info, tmdb_api_key} from 'https://cdn.jsdelivr.net/gh/MarketingPipeline/TheMovieDB-API-Wrapper.js/src/themoviedb-api-wrapper.js' 
	
  // Valid API Key	
 tmdb_api_key("YOUR API KEY HERE")

// Auto detecting name & year # from Torrent Name
fetch_tmdb_info("Captain America The Winter Soldier (2014) 1080p BrRip x264 - YIFY", "movie",  2).then(function(search_results) {
    console.log(search_results)
  });
  
	
/// Both arrays (Media Info & Actors Info)
fetch_tmdb_info("Captain America The Winter Soldier", "movie",  2).then(function(search_results) {
    console.log(search_results)
  });
  
/// Media Info Only
fetch_tmdb_info("8 Mile (2002)", "movie",  2).then(function(search_results) {
    console.log(search_results)[0]
  });  
  
/// Actor / Cast Info Only
fetch_tmdb_info("8 Mile", "movie",  2).then(function(search_results) {
    console.log(search_results)[1]
  });    
```


####                                                                                                                    Options


<table>
<tr>
<th>Parameters</th>
<th>Meaning</th>
<th>Default</th>
<th>Required</th>
</tr>
<tr>
<td>query</td>
<td>The movie you would to search info for</td>
<td><code>undefined</code></td>
<td>Yes</td>
</tr>


<tr>
<td>type</td>
              <td>Type of query to search details for - options:<code>Movie, TV, Actor, Collection, Episode</code>.</td>
<td><code>undefined</code></td>
<td>Yes</td>
</tr>

<tr>
<td>max_actors</td>
<td>The maximum number of actor / cast members to return data for</td>
<td><code>5</code></td>
<td>No</td>
</tr>
	



</table>

	
 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	
</details>
 <br>		
 
	
<br>	 
<br>	 
	
<details><summary>How to search up <b>TV Show</b> info:</summary>
	
<br>		
	
You will require a API key from TheMovieDB and need to set your API key using <code>tmdb_api_key("YOUR API KEY")</code> with your valid API key
	
### Usage
	 

When searching up a TV show - any found media info & actor info will be returned in seperated lists inside of a array. 

A TV show query name could look like the following example(s)

   
    Two and a Half Men
    Two and a Half Men (2003)
    Two.and.a.Half.Men.S05E02.720p.HDTV.x264-KILLERS[rartv]
    
for more accurate results, a year should be provided in the query. 


	
> Paramaters (Query [REQUIRED], Type [REQUIRED], Max Actors)


```js
  /// API WRAPPER USAGE EXAMPLE		
  
  import {fetch_tmdb_info, tmdb_api_key} from 'https://cdn.jsdelivr.net/gh/MarketingPipeline/TheMovieDB-API-Wrapper.js/src/themoviedb-api-wrapper.js' 
  
  // Valid API Key	
 tmdb_api_key("YOUR API KEY HERE")	
	
// Auto detecting name & year # from Torrent Name
fetch_tmdb_info("Two.and.a.Half.Men.S05E02.720p.HDTV.x264-KILLERS[rartv]", "movie",  2).then(function(search_results) {
    console.log(search_results)
  });
  
	
/// Both arrays (Media Info & Actors Info)
fetch_tmdb_info("Two and a Half Men", "tv",  2).then(function(search_results) {
    console.log(search_results)
  });
  
/// Media Info Only
fetch_tmdb_info("Two and a Half Men (2003)", "tv",  2).then(function(search_results) {
    console.log(search_results)[0]
  });  
  
/// Actor / Cast Info Only
fetch_tmdb_info("Two and a Half Men 2003", "tv",  2).then(function(search_results) {
    console.log(search_results)[1]
  });    
```


####                                                                                                                    Options


<table>
<tr>
<th>Parameters</th>
<th>Meaning</th>
<th>Default</th>
<th>Required</th>
</tr>
<tr>
<td>query</td>
<td>The TV show you would to search info for</td>
<td><code>undefined</code></td>
<td>Yes</td>
</tr>


<tr>
<td>type</td>
              <td>Type of query to search details for - options:<code>Movie, TV, Actor, Collection, Episode</code>.</td>
<td><code>undefined</code></td>
<td>Yes</td>
</tr>

<tr>
<td>max_actors</td>
<td>The maximum number of actor / cast members to return data for</td>
<td><code>5</code></td>
<td>No</td>
</tr>
	

	


</table>


 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	
</details>


<br>		
 
	
<br>	 
<br>	 
	
<details><summary>How to search <b>Movie Collection</b> info:</summary>

<br>		
	
You will require a API key from TheMovieDB and need to set your API key using <code>tmdb_api_key("YOUR API KEY")</code> with your valid API key
	
### Usage
	 

> Paramaters (Query [REQUIRED], Type [REQUIRED])


```js
  /// API WRAPPER USAGE EXAMPLE		
  import {fetch_tmdb_info, tmdb_api_key} from 'https://cdn.jsdelivr.net/gh/MarketingPipeline/TheMovieDB-API-Wrapper.js/src/themoviedb-api-wrapper.js' 
  // Valid API Key	
 tmdb_api_key("YOUR API KEY HERE")		
fetch_tmdb_info("Fast And Furious", "collection",  2).then(function(search_results) {
  console.log(search_results)
  });
```



####                                                                                                                    Options


<table>
<tr>
<th>Parameters</th>
<th>Meaning</th>
<th>Default</th>
<th>Required</th>
</tr>
<tr>
<td>query</td>
<td>The movie collection you would to search info for</td>
<td><code>undefined</code></td>
<td>Yes</td>
</tr>


<tr>
<td>type</td>
              <td>Type of query to search details for - options:<code>Movie, TV, Actor, Collection, Episode</code>.</td>
<td><code>undefined</code></td>
<td>Yes</td>
</tr>


	


</table>

 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	
</details>

<br>		
 
	
<br>	 
<br>	 
	
<details><summary>How to search <b>Episode</b> info:</summary>
	
<br>		
	
You will require a API key from TheMovieDB and need to set your API key using <code>tmdb_api_key("YOUR API KEY")</code> with your valid API key
	

	
### Usage

A episode info query could look like the following example(s)

   
    Two and a Half Men
    Two and a Half Men (2003)
    Two.and.a.Half.Men.S05E02.720p.HDTV.x264-KILLERS[rartv]
    
<b>Note</b>: Season and Episode numbers will try to be auto-detected from query, tho they can be provided manually as parameters. If no season or episode name is found or provided, an error message will occur.  	
	
> Paramaters (Query [REQUIRED], Type [REQUIRED], Max Actors, Season, Episode)


```js
 /// API WRAPPER USAGE EXAMPLE		
 import {fetch_tmdb_info, tmdb_api_key} from 'https://cdn.jsdelivr.net/gh/MarketingPipeline/TheMovieDB-API-Wrapper.js/src/themoviedb-api-wrapper.js' 
  // Valid API Key	
 tmdb_api_key("YOUR API KEY HERE")	

// Auto detecting season & episode # from Torrent Name
fetch_tmdb_info("Two and a Half Men.S05E02", "episode",  2).then(function(search_results) {
    console.log(search_results)
  });
	
// Regular Name (with season and episodes as paramaters) 
fetch_tmdb_info("Two and a Half Men", "episode",  2, 5, 2).then(function(search_results) {
    console.log(search_results)
  });	
	
```


####                                                                                                                    Options


<table>
<tr>
<th>Parameters</th>
<th>Meaning</th>
<th>Default</th>
<th>Required</th>
</tr>
<tr>
<td>query</td>
<td>The TV show you would to search info for</td>
<td><code>undefined</code></td>
<td>Yes</td>
</tr>


<tr>
<td>type</td>
              <td>Type of query to search details for - options:<code>Movie, TV, Actor, Collection, Episode</code>.</td>
<td><code>undefined</code></td>
<td>Yes</td>
</tr>

<tr>
<td>max_actors</td>
<td>The maximum number of actor / cast members to return data for</td>
<td><code>5</code></td>
<td>No</td>
</tr>
	
<tr>
<td>season</td>
<td>The season number to search episode info for</td>
<td><code>undefined</code></td>
<td>No</td>
</tr>	

	
<tr>
<td>episode</td>
<td>The episode number to search episode info for</td>
<td><code>undefined</code></td>
<td>No</td>
</tr>	
	


</table>

 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	
</details>


 <br>		
 
	
<br>	 
<br>	 
	
<details><summary>How to search <b>Actor</b> info:</summary>
	
<br>	
	
You will require a API key from TheMovieDB and need to set your API key using <code>tmdb_api_key("YOUR API KEY")</code> with your valid API key
	
### Usage
	 

> Paramaters (Query [REQUIRED], Type [REQUIRED])

```js
/// API WRAPPER USAGE EXAMPLE	
import {fetch_tmdb_info, tmdb_api_key} from 'https://cdn.jsdelivr.net/gh/MarketingPipeline/TheMovieDB-API-Wrapper.js/src/themoviedb-api-wrapper.js' 
  // Valid API Key	
 tmdb_api_key("YOUR API KEY HERE")	
fetch_tmdb_info("Eminem", "actor").then(function(search_results) {
  console.log(search_results)
  });
```




####                                                                                                                    Options


<table>
<tr>
<th>Parameters</th>
<th>Meaning</th>
<th>Default</th>
<th>Required</th>
</tr>
<tr>
<td>query</td>
<td>The actor you would to search info for</td>
<td><code>undefined</code></td>
<td>Yes</td>
</tr>


<tr>
<td>type</td>
              <td>Type of query to search details for - options:<code>Movie, TV, Actor, Collection, Episode, Similar, Reviews</code>.</td>
<td><code>undefined</code></td>
<td>Yes</td>
</tr>


</table>



 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	
</details>


<br>		
 
	
<br>	 
<br>	 
	
<details><summary>How to search <b>TV / Movie</b> reviews:</summary>

<br>		
	
You will require a API key from TheMovieDB and need to set your API key using <code>tmdb_api_key("YOUR API KEY")</code> with your valid API key
	
### Usage
	 
A query name could look like the following example(s)

   
    Two and a Half Men
    8 Mile (2003)
    Two.and.a.Half.Men.S05E02.720p.HDTV.x264-KILLERS[rartv]
    
for more accurate results, a year should be provided in the query. 


> Paramaters (Query [REQUIRED], Type [REQUIRED], Query Type [Required])


```js
  /// API WRAPPER USAGE EXAMPLE		
  import {fetch_tmdb_info, tmdb_api_key} from 'https://cdn.jsdelivr.net/gh/MarketingPipeline/TheMovieDB-API-Wrapper.js/src/themoviedb-api-wrapper.js' 
  // Valid API Key	
 tmdb_api_key("YOUR API KEY HERE")		
fetch_tmdb_info("Fast And Furious", "reviews",  "movie").then(function(search_results) {
  console.log(search_results)
  });
```



####                                                                                                                    Options


<table>
<tr>
<th>Parameters</th>
<th>Meaning</th>
<th>Default</th>
<th>Required</th>
</tr>
<tr>
<td>query</td>
<td>The movie or TV show you would like to search reviews for</td>
<td><code>undefined</code></td>
<td>Yes</td>
</tr>


<tr>
<td>type</td>
              <td>Type of query to search details for - options:<code>Movie, TV, Actor, Collection, Episode, Similar, Reviews</code>.</td>
<td><code>undefined</code></td>
<td>Yes</td>
</tr>


<tr>
<td>query_type</td>
              <td>Type of query to search reviews for <code>TV or Movie</code>.</td>
<td><code>undefined</code></td>
<td>Yes</td>
</tr>


	


</table>

 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	
</details>


<br>		
 
	
<br>	 
<br>	 
	
<details><summary>How to search <b>Similar</b> movies / tv shows:</summary>

<br>		
	
You will require a API key from TheMovieDB and need to set your API key using <code>tmdb_api_key("YOUR API KEY")</code> with your valid API key
	
### Usage
	 
A query name could look like the following example(s)

   
    Two and a Half Men
    8 Mile (2003)
    Two.and.a.Half.Men.S05E02.720p.HDTV.x264-KILLERS[rartv]
    
for more accurate results, a year should be provided in the query. 
	 

> Paramaters (Query [REQUIRED], Type [REQUIRED], Query Type [Required])


```js
  /// API WRAPPER USAGE EXAMPLE		
  import {fetch_tmdb_info, tmdb_api_key} from 'https://cdn.jsdelivr.net/gh/MarketingPipeline/TheMovieDB-API-Wrapper.js/src/themoviedb-api-wrapper.js' 
  // Valid API Key	
 tmdb_api_key("YOUR API KEY HERE")		
fetch_tmdb_info("Fast And Furious", "similar",  "movie").then(function(search_results) {
  console.log(search_results)
  });
```



####                                                                                                                    Options


<table>
<tr>
<th>Parameters</th>
<th>Meaning</th>
<th>Default</th>
<th>Required</th>
</tr>
<tr>
<td>query</td>
<td>The movie, TV show or collection you would to similar info for</td>
<td><code>undefined</code></td>
<td>Yes</td>
</tr>


<tr>
<td>type</td>
              <td>Type of query to search details for - options:<code>Movie, TV, Actor, Collection, Episode, Similar, Reviews</code>.</td>
<td><code>undefined</code></td>
<td>Yes</td>
</tr>


<tr>
<td>query_type</td>
              <td>Type of query to search similar results for <code>TV or Movie</code>.</td>
<td><code>undefined</code></td>
<td>Yes</td>
</tr>
	


</table>

 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	
</details>



<br> <br> <br> <br> <br> <br> <br> <br> <br>
	
</details>

<br> 

<details>

<summary>CDN URL</summary>

### HTML script

    <script type="module" src="https://cdn.jsdelivr.net/gh/MarketingPipeline/TheMovieDB-API-Wrapper.js/dist/themoviedb-api-wrapper.min.js" defer></script> 

### Import 

    import {fetch_tmdb_info, tmdb_api_key} from 'https://cdn.jsdelivr.net/gh/MarketingPipeline/TheMovieDB-API-Wrapper.js/dist/themoviedb-api-wrapper.min.js'
    
</details>    






## Contributing ![GitHub](https://img.shields.io/github/contributors/MarketingPipeline/TheMovieDB-API-Wrapper.js)

Want to improve this project? Create a pull request with detailed changes / improvements! If approved you will be added to the list of contributors of this awesome project!

See also the list of
[contributors](https://github.com/MarketingPipeline/TheMovieDB-API-Wrapper.js/graphs/contributors) who
participate in this project.

## License ![GitHub](https://img.shields.io/github/license/MarketingPipeline/TheMovieDB-API-Wrapper.js)

This project is licensed under the MIT License - see the
[LICENSE](https://github.com/MarketingPipeline/TheMovieDB-API-Wrapper.js/blob/main/LICENSE) file for
details.
