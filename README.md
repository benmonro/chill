chill
=====

easy rest mapping for express

###Install
	npm install chill

###Usage

app.js

---
	    var chill = require("chill")(express);

        chill.handle(require("./routes/posts"));
        chill.handle(require("./routes/comments"));

posts.js / comments.js

---

	 	exports.path = "/posts"; // ("/comments")

	 	exports.create = function(req, res) {
	 		//handle posts
	 	}

	 	exports.list = function(req, res) {
	 		//handle gets
	 	}

	 	exports.delete = function(req, res) {
	 	}

	 	exports.update = function(req, res) {
	 	}