//Problem I need a simple way to look at a users message after submit
//Solution use Node.js to perform the message look ups and server our template via HTTP

//1. Create a web server

	document.addEventListener("keydown", function (e) {
		if (e.which === 123) {
			require('remote').getCurrentWindow().toggleDevTools();
		} else if (e.which === 116) {
			location.reload();
		}
	});

