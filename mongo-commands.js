// to see all existing dbs 
-- show databases

// to create or select a new database 
-- use db_name

// to create a collection 
-- db.createCollection('coll_name')

// to insert document in collection
-- db.collectionName.insert({})

// to insert multiple records 
-- db.collectionName.insertMany([{},{},{}])

to delete a record 
-- db.collectionName.deleteOne({name:"Iphone14"})
-- db.collectionName.deleteMany({})

to upadate a record 
-- db.collectionName.updateOne({_id: ObjectId('65cc90900eb3a255e36882e3')},{$set:{price:1100}})

-- db.products.updateOne(
    {name:"TV Remote"},
    {$set:{price:100}},
    {upsert:true}
    )

// to view data from a collection 
-- db.collectionName.find()

to apply a condition
-- db.collectionName.find({cond1,cond2...})

// query ops

comparison ops / relational 
$gt $lt $gte $lte $eq $ne

$in : [] $nin:[]

-- db.collectionName.find({price:{$gt:300}})


logical ops 

$and , $or 

db.collectionName.find({condq,cond2,cond3})

-- db.collectionName.find(
    {
        $and:[{},{},{},{}]
    }
)


db.products.find({
    $and:[
        {price:{$gt:1000}},
        {quantity:{$lt:100}}
        ]
    })

    db.products.find({
    $or:[
        {price:{$gt:1000}},
        {quantity:{$lt:100}}
        ]
    })



to limit 

db.collectionName.find().limit(count)

to skip 

db.collectionName.find().limit(count).skip(count)


cto get count of docs 

db.collectionName.countDocuments()


proection 

db.collectionName.find({},{name:1})

to sort 

db.collectionName.find().sort({price:[1,-1],key:value})








