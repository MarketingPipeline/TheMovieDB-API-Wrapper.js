# TheMovieDB-API-Wrapper.js
A JavaScript library for easily fetching ALL info about movies / tv including (genres & actors) & more via TheMovieDB API. 


## Example usage

You must provide a API key for TheMovieDB which can be found here.




How to search up movie info - 


How to search up TV info - 






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


-----------------




## Example and usage

You can view a demo of the API wrapper in use [here.](https://marketingpipeline.github.io/Media-Element.js/demo)





	
 <br>
<details><summary>How to use <b>Media-Element.js</b>:</summary>
 <br>		
 
	
<br>	 
<br>	 
	
<details><summary>How to show a <b>Movie</b>:</summary>
	
### Usage
	 
   
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




Note: For movies & TV show a API Key is required from TheMovieDB, songs do NOT require a API key.

After getting your API key (if required) place it in your HTML document like so 

```js
<script>
 var TheMovieDB_APIKey = "YOUR API KEY HERE"
 </scrip>
```





   include this [script](https://github.com/MarketingPipeline/Media-Element.js/blob/main/version/1.0.2/dist/media-element.min.js) at the <b>bottom</b> of your HTML document.
         
    <script src="https://cdn.jsdelivr.net/gh/MarketingPipeline/Media-Element.js/version/1.0.2/dist/media-element.min.js"></script> 



     


	   
	
<b><i>Note:</b></i> You can show as many movies as you want!
	
 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	
</details>
 <br>		
 
	
<br>	 
<br>	 
	
<details><summary>How to show a <b>TV Show</b>:</summary>
	
### Usage
	 

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


Note: To display TV show(s) - you will require a API key from TheMovieDB.

After getting your API key place it in your HTML document like so 

```js
<script>
 var TheMovieDB_APIKey = "YOUR API KEY HERE"
 </scrip>
```





   include this [script](https://github.com/MarketingPipeline/Media-Element.js/blob/main/version/1.0.2/dist/media-element.min.js) at the <b>bottom</b> of your HTML document.
         
    <script src="https://cdn.jsdelivr.net/gh/MarketingPipeline/Media-Element.js/version/1.0.2/dist/media-element.min.js"></script> 



     


	   
	
<b><i>Note:</b></i> You can show as many TV show's as you want

 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	
</details>


<br>		
 
	
<br>	 
<br>	 
	
<details><summary>How to show a <b>Movie Collection</b>:</summary>
	
### Usage
	 

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


Note: To display TV show(s) - you will require a API key from TheMovieDB.

After getting your API key place it in your HTML document like so 

```js
<script>
 var TheMovieDB_APIKey = "YOUR API KEY HERE"
 </scrip>
```





   include this [script](https://github.com/MarketingPipeline/Media-Element.js/blob/main/version/1.0.2/dist/media-element.min.js) at the <b>bottom</b> of your HTML document.
         
    <script src="https://cdn.jsdelivr.net/gh/MarketingPipeline/Media-Element.js/version/1.0.2/dist/media-element.min.js"></script> 



     


	   
	
<b><i>Note:</b></i> You can show as many TV show's as you want

 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	
</details>

<br>		
 
	
<br>	 
<br>	 
	
<details><summary>How to show a <b>Episode Info</b>:</summary>
	
### Usage
	 

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


Note: To display TV show(s) - you will require a API key from TheMovieDB.

After getting your API key place it in your HTML document like so 

```js
<script>
 var TheMovieDB_APIKey = "YOUR API KEY HERE"
 </scrip>
```





   include this [script](https://github.com/MarketingPipeline/Media-Element.js/blob/main/version/1.0.2/dist/media-element.min.js) at the <b>bottom</b> of your HTML document.
         
    <script src="https://cdn.jsdelivr.net/gh/MarketingPipeline/Media-Element.js/version/1.0.2/dist/media-element.min.js"></script> 



     


	   
	
<b><i>Note:</b></i> You can show as many TV show's as you want

 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	
</details>


 <br>		
 
	
<br>	 
<br>	 
	
<details><summary>How to search up a <b>Actor</b>:</summary>
	
### Usage
	 

> Paramaters (Person Name, Type)

```js
FetchDataFrom_TheMovieDB("Eminem", "actor").then(function(search_results) {
  console.log(search_results)
  });
```








   include this [script](https://github.com/MarketingPipeline/Media-Element.js/blob/main/version/1.0.2/dist/media-element.min.js) at the <b>bottom</b> of your HTML document.
         
    <script src="https://cdn.jsdelivr.net/gh/MarketingPipeline/Media-Element.js/version/1.0.2/dist/media-element.min.js"></script> 



     


	   
	
<b><i>Note:</b></i> You show as many song's as you want

 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	 <br>	
</details>

####                                                                                                                    Options


<table>
<tr>
<th>Attribute</th>
<th>Meaning</th>
<th>Default</th>
<th>Required</th>
</tr>
<tr>
<td>name</td>
<td>The movie, TV show or song name you would like to show</td>
<td><code>undefined</code></td>
<td>Yes</td>
</tr>


<tr>
<td>type</td>
              <td>Type of Media to show details for - options:<code>TV, Song</code>, by default movie type will be shown.</td>
<td><code>Movie</code></td>
<td>No</td>
</tr>

<tr>
<td>theme</td>
<td>Set a different color theme - options <code>dark</code></td>
<td><code>light</code></td>
<td>No</td>
</tr>



</table>
	
	
</details>










## Contributing ![GitHub](https://img.shields.io/github/contributors/MarketingPipeline/Media-Element.js)

Want to improve this project? Create a pull request with detailed changes / improvements! If approved you will be added to the list of contributors of this awesome project!

See also the list of
[contributors](https://github.com/MarketingPipeline/Media-Element.js/graphs/contributors) who
participate in this project.

## License ![GitHub](https://img.shields.io/github/license/MarketingPipeline/Media-Element.js)

This project is licensed under the GPL-3.0 License - see the
[LICENSE.md](https://github.com/MarketingPipeline/Media-Element.js/blob/main/LICENSE) file for
details.

