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
	 		//handle post
	 	}

	 	exports.list = function(req, res) {
	 		//handle get w/ no id
	 	}

		exports.findById = function(req, res) {
			//handle get w/ req.params.id
		}

	 	exports.delete = function(req, res) {
			//handle delete w/ req.params.id
	 	}

	 	exports.update = function(req, res) {
			//handle put w/ req.params.id
	 	}