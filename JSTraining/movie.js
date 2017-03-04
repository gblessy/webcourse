var movies = [
	{
		rating : 4.3,
		name : "Independence day",
		hasWatched : true
	},
	{
		rating : 3.0,
		name : "bigBandTheory",
		hasWatched : false 
	},
	{
		rating : 5.0,
		name : "Batman vs Superman",
		hasWatched : false
	}
]

for( var i = 0; i < movies.length; i++){
	if (movies[i].hasWatched) {
		console.log("You have watched " + movies[i].name + " - " + movies[i].rating + " stars!");
	} else {
		console.log("You have not seen " + movies[i].name + " - " + movies[i].rating + " stars!");
	}
}