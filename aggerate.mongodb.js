use("student-management");
// db.movies.find();
//aggregate=> read operaton
//does not change content of db

//?pipeline stages
// $match => filter
// $project => select
//$sort => sort
//$limit => limit
//$skip => skip
//$lookup => join
//$unwind => unwind


// db.movies.aggregate([
//     {
//         $match:{
//             "rating.average":{$gt:8},
//         },
//     },
//     {
//         $project: {
//           name:1,
//           rating:1,
//         }
//     }
// ]);

//? find the movies whose rating is grater than 7 and less than 9 and display name and rating
// db.movies.aggregate([
//     {
//         $match:{
            // "rating.average":{$gt:7,$lt:9},
//             $and:[
//                 {"rating.average":{$gt:7}},
//                 {"rating.average":{$lt:9}}
//             ]

//         }
//     },
//     {
//         $project:{
//             movieName:"$name",
//             avgRating:"$rating.average",
//         }
// }
// ]);

// find the movies whose rating is grater than 7and weight is greater than 60 and display name and rating
// db.movies.aggregate([
//     {
//         $match:{
//             "rating.average":{$gt:7},
//             "weight":{$gt:60},
//         }
//     },
//     {
//         $project:{
//             name:1,
//             rating:1,
//         }
//     }
// ]);

//? find movies whose genre is Thriller and Coomdey and show movie name and genre
// db.movies.aggregate([
//     {
//         $match:{
//                 $and:[{genres:"Thriller"},{genres:"Comedy"}]
//         }
//     },

//     {
//         $project:{
//            name:1,
//             genres:1,
//         }
//         }
// ]);

//?array field xa and aapply bhairaxa bhane
//?we can use $all
// db.movies.aggregate([
//     {
//         $match:{
//             genres:{$all:["Thriller","Comedy"]}
//         }
//     },
//     {
//         $project:{
//             name:1,
//             genres:1,
//         }
//     }
// ]);

//?find movies whose runtime is grater than 50 display name and runtime
//?sort
//?acending order(1)
//?descending order(-1)

// db.movies.aggregate([{
//     $match:{
//         runtime:{$gt:50}
//     }
// },
// {

//     $sort:{
//         runtime:-1,
//     },
// },
// {
//     $project: {
//       name:1,
//         runtime:1,
//     }
// }
// ])

//? find all movies sort them in descending order of rating select name and rating
// db.movies.aggregate([
//     {
//         $match:{},
//     },
//     {$sort:{
//             "rating.average":-1,
//         }
    
//     },
//     {
//         $project:{
//             name:1,
//             rating:1,
//         }
//     }
// ]);

//?find movies whose rating is grater tha 8 and genres is "Action"and 
//?sort them in order of thier name in ascending order project name,geners, rating
// db.movies.aggregate([
//     {
//         $match:{
//             "rating.average":{$gt:8},
//             genres:"Action",
//         }
//     },   
//     {
//         $sort:{
//             name:1,
//         }
//     },
//     {
//         $project:{
//             name:1,
//             genres:1,
//             rating:1,
//         }
//     }
// ]);

//?find movies whose runtime is less than 120 or network country is "Canada",sort them 
//?from runtime ascending

// db.movies.aggregate([
//     {
//         $match:{
//             $or:[
//                 {runtime:{$lt:120}},
//                 {"network.country.name":"Canada"}
//             ]
//         }
//     },
//     {
//         $sort:{
//             runtime:-1,
//         }
//     },
//     {$limit:2},
//     {
//         $project:{
//             name:1,
//             runtime:1,
//             network:1,
//         }
//     },
//     {$limit:2}
// ]);

// db.movies.aggregate([
//     {$match:{}
// },{$sort:{

// }},
// {$project:{}}
// ])

//?$unwind

// db.users.insertMany([{
//     name:"Rakesh",
//     age:22,
//     hobbies:["cycling","hiking"],
// },
// {
//     name:"Roshan",
//     age:25,
// },

// ]);

db.users.aggregate([
    {$match:{}},
    {
        $unwind: {
            path: "$hobbies",
            preserveNullAndEmptyArrays: true
        },
    },

])


