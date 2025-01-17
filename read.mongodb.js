use("student-management");

// db.movies.find();

//?comaprison operator
//? find movies whose runtime is 60
//?runtime === 60
// db.movies.find({ runtime: {$eq: 60} });
//? $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin


//?find movies whose weight is greater than 95
//weight > 95
// db.movies.find({ weight: {$gt: 95} });

//?find movies whose rating is greater than 9
// db.movies.find({"rating.average": {$gt: 9}});

//? why putting string in rating.average
//? because rating is an object and average is a property of rating object

//$gte
//?find movies whose rating is greater than or equal to 8
// db.movies.find({"rating.average":{$gte:8}});

//$lt
//?find movies whose weight is less than 65
// db.movies.find({weight:{$lt:65}}).count(46);

//?find movies whose rating is less tha or equal to 5
// db.movies.find({"rating.average":{$lte:5}});

//?find movies whose country is "united States"
// db.movies.find({"network.country.name":{$eq:"United States"}});
// db.movies.find({"network.country.name":"United States"}).count();

//?find movies whose country is not "United States"
// db.movies.find({"network.country.name":{$ne:"United States"}});

//?find movies whose country is "United States" or "India"
// db.movies.find({"network.country.name":{$in:["United States","India"]}});

//?logical operator
//?and
//?or
//?not
//?nor

//? why NAND gate is not used in this logical operator
//? because NAND gate is not used in this logical operator
//? give reason why NAND gate is not used in this logical operator

//?or
//find movies whose rating is 9 or country is "canada"
// db.movies.find({$or:[{"rating.average":9},{"network.country.name":"Canada"}]});

// db.movies.find({$or:[{"rating.average":9},{"network.country.name":"Canada"}]}).count();

//find movies whose status is "Ended" or average is less than 5
// db.movies.find({$or:[{"status":"Ended"},{"rating.average":{$lt:5}}]});
// db.movies.find({$or:[{status:"Ended"},{"rating.average":{$lt:5}}]});

//?and
//?find movies whose genres is "Thriller" and rating i less than 7
// db.movies.find({$and:[{genres:"Thriller"},{"rating.average":
    // {$lt:7}},{genres:1,rating:1, name:1}]}); //?projection
// db.movies.find({$and:[{genres:["Thriller"]},{"rating.average":{$lt:7}}]}).count();

//?$nor
//find movies whose genre is neither "Drama" nor "comdey"
// db.movies.find({$nor:[{genres:"Drama"},{genres:"Comedy"}]},{name:1,genres:1});


//$not
//?find movies whose genre is npt Drama
// db.movies.find({genres:{$not:{$eq:"Drama"}}});
// db.movies.find({genres:{$ne:"Drama"}});
//?$and
//find movies whose genres is "comdey" and rating is greater than 8
// db.movies.find({$and:[{genres:"Comedy"},{"rating.average":{$gt:8}}]});

// db.movies.find({genres:"Comedy","rating.average":{$gt:8}});

//?find movies whose rating is either 7 or 7.5 or 8 or 8.5 or 9 or 9.2 or 9.3
// db.movies.find({$or:[{"rating.average":7},
//     {"rating.average":7.5},{"rating.average":8},
//     {"rating.average":8.5},{"rating.average":9},
//     {"rating.average":9.2},{"rating.average":9.3}]});

// db.movies.find({"rating.average":{$in:[7,7.5,8,8.5,9,9.2,9.3]}},{name:1, rating:1});
//nin mean deko value banda arko garnu xa vane

