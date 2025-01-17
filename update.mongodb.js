use("student-management");

// db.players.insertMany([{
//     name:"Rohit sharma",
//     game:"Cricket",
//     age:35,
//     hobbies:["Cycling","Trekking","Dancing"]
// },
// {
//     name:"Lionel Messi",
//     game:"Football",
//     age:34,
//     hobbies:["Swimming","Singing","Dancing"]
// },
// {
//     name:"Luca Modric",
//     game:"Football",
//     age:38,
//     hobbies:["Cycling","Reading","Running"]
// }
// ]);

//? updaate age of Rohit sharma to 40
//$set
// db.players.updateOne({name:"Rohit sharma"},{$set:{age:40}})
//? update age pf ;ionel Messi to 45
// db.players.updateOne({name:"Lionel Messi"},{$set:{age:45}});

//?update game of Luka Modric to Golf
// db.players.updateOne({name:"Luca Modric"},{$set:{game:"Golf",age:40}});

// db.players.updateOne(
//     {_id:ObjectId('67888e7ba6c4c9176de92f01'),

//     },
//     {
//         $set:{
//             game:"Golf",
//             age:40
//         }
//     }
// )
//?increase age of all player by 10
// db.players.updateMany({}, {$inc:{age:10}});

//?decrease age of all player by 5
// db.players.updateMany({},{$inc:{age:-5}});

//?multiply age of all player by 2
// db.players.updateMany({},{$mul:{age:2}});

//? divide age of all player by 2
// db.players.updateMany({},{$mul:{age:0.5}});

//? increase age of Messi by 5
// db.players.updateOne({name:"Lionel Messi"},{$inc:{age:5}});
//?divide age of ROhit by 2
// db.player.updateOne({name:"Rohit sharma"},{$mul:{age:0.5}});
//?update player name Lionel Messi to Ronaldo
// db.players.updateOne({name:"Lionel Messi"},{$set:{name:"Ronaldo"}});

//?array operator
//?add "Hiking" as hobby to ROhit sharma
//?$push => ads items to end of array
// db.players.updateOne({name:"Rohit sharma"},{$push:{hobbies:"Hiking"}})
//?add "Cycling","reading" as hobbies to Ronaldo
// db.players.updateOne({name:"Ronaldo"},{$push:{hobbies:{$each:["Cycling","Reading"]}}})


//?$pop
//? removes item from start/end of array
//?1=> removes last time
//?-1=>remove first item

// db.players.updateOne({name:"Ronaldo"},{$pop:{hobbies: 1}})

//?$addToSet
// db.players.updateOne({
//     name:"Ronaldo",
// },
// {$addToSet:{
//     hobbies:"writing"
// }})

// db.players.updateOne({
//     name:"Ronaldo",
// },
// {$addToSet:{
//     hobbies:{$each:["writing","swimming", "movies"]}
// }})

//?add "MOvies","Music","Horse-riding" to Luca Modric
// db.players.updateOne({name:"Luca Modric"},{$addToSet:{hobbies:{$each:["Movies","Music","Horse-riding"]}}})


//?$pull => removes item base upon values/condition
// db.players.updateOne(
//     {name:"Luca Modric"

//     },
//     {$pull:{hobbies:"Music"}
// })

//?$pullAll => removes multiple items
// db.players.updateOne(
//     {name:"Luca Modric"

//     },
//     {$pullAll:{hobbies:["Music","Movies"],}
// })

// db.players.updateMany({},{
//     $set:{
//         mark:[24, 32,12,29,36,41,55],
//     }
// })

//?remove all marks greater than 32
// db.players.updateOne({name:"Ronaldo"},{
//     $pull:{
//         mark:{$gt:32}
//     }

// })

//?remove maark greater than 32 for luca Modric
db.players.updateOne({name:"Luca Modric"},{$pull:{mark:{$gt:32}}})
db.players.find();