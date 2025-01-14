use("big-mart");
//crud operation
//create=>add/insert
//read=>retrieve/find
//update => edit
//delete => remove

//create
//insert
//? insertOne => to create one document
//? insertMany => to create multiple documents


//?BSON => Binary object notation
//json => sime other features(like date, function) are not supported
// db.products.insertOne({
//     name:"Rice",
//     price:3200,
//     quantity:10,
//     brand:"bhansaghar",
    
// });

//?insertMAny
// db.products.insertMany([{
//     name:"Bread",
//     price:30,
//     brand:"Britannia",
//     quantity:100,
// },{
//     name:"Butter",
//     price:100,
//     brand:"Amul",
//     quantity:50,

// },
// ]);


//?read
//?findOne , find
//? find products whose brand is "Amul"
// db.products.insertOne({
//     brand:"Amul",
//     price:100,
//     name: "liquid butter",
//     quantity:2
    

// });
// db.products.find({brand:"canta"});

//?findOne=> return first document which matches the condition
// db.products.findOne({brand:"Amul"});

//?deleteOne
//?deleteMany
//?deleteOne => delete first document which matches the condition

//?delete product whoch name is "Rice"

//?deletemany
//?delete all products whose brand is "Amul"

// db.products.deleteOne({name:"Rice"});
// db.products.deleteMany({brand:"Amul"});


// db.products.insertOne({
//     name:"sunscreen",
//     price:50,
//     brand:"plum",
//     quantity:"200ml",
// });

//? to delete all product in tabel
//? leave the condition empty
// db.products.deleteMany({});

//?update
//?updateOne =>update single document
//?updateMany => update multiple documents


//?updateOne
//? update quantoity of product whose name is "Bread" to 10
// db.products.updateOne(
//     {name:"Bread"},
//     {
//         $set:{
//             quantity:10,
//         }
// }
// );

//? update  bread brand from "Britannia" to "helmer"
// db.products.updateOne(
//     {name:"Bread"},
//     {
//         $set:{
//             brand:"helmer",
//         }
// }
// );

//?update quantity of butter to 20
// db.products.updateOne({
//     name:"Butter"
// },{
//     $set:{
//         quantity:20,
//     }
// })

//? updateMany
//?set price of all products to 1000
db.products.updateMany({},{
    $set:{price:1000,
}
})
db.products.find();