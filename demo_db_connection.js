var mysql = require('mysql');

var con = mysql.createConnection
({
	host: "192.168.137.85",
	user: "root",
	password: "moosemoose69"
});

con.connect(function(err)
	{
		if(err) throw err;
		console.log("Connected!");
		con.query("SELECT * FROM Books", function (err, result, fields) 		{
		if (err) throw err;
		console.log(result);
		});

	});
