const mysql = require('mysql');
const http = require('http');

var con = mysql.createConnection
({
	host: "localhost",
	user: "root",
	password: "moosemoose69",
	database: "dbw2020"
});

con.connect(function(err)
{
	con.query("SELECT * FROM Books", (err, res, cols)=>{
	if (err) throw err;
	console.log(res);
	});
});



/*
con.connect(function(err)
{
	con.query("SELECT * FROM Users", (err, res, cols)=>{
	if (err) throw err;
	console.log(res);
	});
});



con.connect(function(err)
{
	con.query("SELECT * FROM Transactions", (err, res, cols)=>{
	if (err) throw err;
	console.log(res);
	});
})
*/
