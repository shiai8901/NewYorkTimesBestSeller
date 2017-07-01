# NewYorkTimesBestSeller
A browsable UI for New York Times bestsellers
given the following endpoint...
``` 
http://api.nytimes.com/svc/books/v3/lists/overview.jsonp?callback=foobar&api-key=[YOUR API KEY]
``` 
Please feel free to use any framework and/or library. Your solution should be supported by all modern browsers.
 
Requires
A NY Times API key...
```
http://developer.nytimes.com/signup (make sure to select the Books API from the API menu)
```

## Start
```
webpack -d --watch
```
and then open client/index.html in browser

## Bugs
User can browse the home page, however, when user click a list_name, the book list detail view cannot render properly, since the data fetched through NY Times API does not contain book image.

## What it looks like
https://newyorktimesbestsellers-react.herokuapp.com/
Or check out the video clip: https://youtu.be/VHrl9unAurY