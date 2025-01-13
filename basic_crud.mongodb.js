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
db.products.find();