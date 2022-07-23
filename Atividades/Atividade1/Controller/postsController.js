let posts = [{ id: 1, texto: "Oi, tudo bem?", likes: 6 }];

getPost = (req, res) => {
	res.json(posts);
};

getPostById = (req, res) => {
	var reqId = parseInt(req.params.id);

	var post = posts.find(({ id }) => id === reqId);

	if (post) {
		res.json(post);
	} else {
		res.status(404).send("Not Found");
	}
};

postPost = (req, res) => {
	posts.push(req.body);
	res.status(200).send(req.body);
};

deletePost = (req, res) => {
	var reqId = parseInt(req.params.id);

	var post = posts.find(({ id }) => id === reqId);

	if (post) {
		res.status(200).send(posts.splice(posts.indexOf(post), 1));
	} else {
		res.status(404).send("Not Found");
	}
};

module.exports = {
	getPost,
	getPostById,
	postPost,
	deletePost,
};
