var POSTS_URL= "https://jsonplaceholder.typicode.com/posts/1",
	TODOS_URL = "https://jsonplaceholder.typicode.com/todos/1",
	PHOTOS_URL = "https://jsonplaceholder.typicode.com/photos/1";

var displayDataContainer = '.results';

function showData(data) {
	$(displayDataContainer).append("<pre>"+JSON.stringify(data)+"</pre>");
	$(displayDataContainer).append("<br>");
}
function getData(url) {
	var promise =  new Promise(function(resolve, reject) {
		$.get(url, function(response) {
			resolve(response);
		}, function() {
			reject(new Error("Request failed."));
		}, "json" );
	});
	return promise;
}

getData(POSTS_URL).then(function(data) {
	showData(data);
}, function(err) {
	console.log("Error: " + err);
});

getData(TODOS_URL).then(function(data) {
	showData(data);
}, function(err) {
	console.log("Error: " + err);
});

getData(PHOTOS_URL).then(function(data) {
	showData(data);
}, function(err) {
	console.log("Error: " + err);
});

Promise.all([getData(POSTS_URL), getData(TODOS_URL), getData(PHOTOS_URL)]).then(function() {
    $(displayDataContainer).append("Done with the calls");
});