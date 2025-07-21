// 1- to show all databases

// show databases
// show dbs


//  2- create database if not exist  OR  Switches to the Database if exists

// use allenhouse_db

// Note - yha newly created database dikhai nhi padhega abhi kyoki koi collection nhi hai. abhi ye non-existent/non-realized database hai. aisa mongoDB isliye karta hai jisse use - do not take care of extra storage or overhead for unused DBs.


// 3- how to create new collection

// db.createCollection("Students_data")

// agar collection shi se ban gya to response milega - { ok: 1 } 
// ab newly created database dikhne lagega

// note - db refers to currently selected database


//  4- Insert new document 

// db.collectionName.insertOne({ stuName:"ritu" , stuage:20 , stuEmail:"ritu@gmail.com" , stuSGPA:9.0 })

// agar data shi se inserted ho jayega to ack. milega -
/*
{
  acknowledged: true,
  insertedId: ObjectId('6879d9541c6f4318476a090e')
}
*/

// 5 -  to retrieve all data - 

// db.Students_data.find()

// note-  select * from table -> yaha * represents = all columns 

// 6- insert more than 1 doucment at once - 

/*
 db.Students_data.insertMany([
    {
        stuName:"rastogi" , stuage:19 , stuEmail:"rastogi@gmail.com" , stuSGPA:7.4
    } ,
    {
        stuName:"keshav" ,  stuEmail:"keshav@gmail.com" , stuage:19  , stuSGPA:8.42
    } ,
    {
        stuName:"raghav" ,  stuEmail:"raghav@gmail.com" , stuage:17  , stuSGPA:9.2 , branch:"AIML" , stuLang:["c","c++","python"]
    } ,
    {
        stuName:"krish" ,  stuEmail:"krish@gmail.com" , stuage:18  , stuSGPA:8.2 , branch:"AIML" , stuLang:["c","java","python"] ,
        stuAddress:{
            houseNo:420,
            city:"kanpur",
            pincode:"208014"
        }
    }
])  
*/ 

// note - fieldname same hai to sequence change krne se koi fark nhi pdega ( alag sequence mai save hoga per data access to .name se hi kar rhe)

// ques - insertMany() se multiple documents insert ho rhe to inn multiple documents ka data type kya hoga ??
// ans - array datatype . tabhi insertMany() ke ander [] mai documents likhte hai


// 7- data ko proper formatting mai dikhane per

// db.Students_data.find().pretty()


// 8- to count total number of documents

// db.Students_data.find().count()


// 9- how to find specific values 

// selection - it specify selection criteria .
// projection - apko kitni fields chiye . specify no of fields to return in document that matches the selection criteria 

// db.Students_data.find( selection,prjection )
// db.Students_data.find( {},{} )  // all data

// note - mongoDB mai sab json format mai store hota . datatype object.

// include - 
// db.Students_data.find( {},{ stuName:1 , stuEmail:1 } )   // isse kewal stuName or stuEmail show hoga ( 1 means include field)
// exclude 
// db.Students_data.find( {},{ stuage:0  } )    //  iski wajh se stuage field nhi dikhai degi baki sari fields dikhai degi

// note - 
// db.Students_data.find( {},{ stuName:1 , stuEmail:0 } )   isse include and exclude dono ho jana chiye per ye error dega . include , exclude ek sath not allowed. to error aayegi
// reason - ham bata rhe hme bas stuName:1 ko show kro kewal to kewal yhi show hoga . to stuEmail:0  apne aap hi excluded hai ise faltu mai hi likha

// special case --
// include exclude dono ek sath kab kaam krege ?? - only in 1 case -
// db.Students_data.find( {},{ stuage:1 , _id:0  } )    - yaha hme _id bhi nhi milegi.


// 10 - how to find value of nested document ( jaise address mai kewal houseNo chiye) - 

// we can do -  db.Students_data.find( {},{ stuName:1 , stuAddress.houseNo:1 , _id:0  } )  per ye error dega 

// shi method - stuAddress.houseNo ko '' mai likhege
//  db.Students_data.find( {},{ stuName:1 , 'stuAddress.houseNo':1 , _id:0  } )
// why ?? - 'stuAddress.houseNo' ko as a single string consider krege


// 11 - 
/*
_id - it is a primary key. every document has its unique id  

mongoDB created this id which has 12 bytes

4 bytes - timestamp
5 bytes - random value ( unique to machine & process )
3 bytes - Incrementing counter

RDBMS mai - auto_increment use hota hai as a increment counter 

*/


// note - mongoDB mai sab kuch json format . 


// 12 - find with selection -

/*
a) equal to 
db.Students_data.find( 
    {
        stuName: { $eq : "raghav"}
    }
)
*/

/*
b) Greator than 
db.Students_data.find( 
    {
        stuSGPA: { $gte : 8 }
    }
)
*/

/*
c) In operator - jo jo value present hai in ki wo wo document milege
db.Students_data.find( 
    {
        stuName : { $in : ['keshav','raghav','bhalu'] }
    }
)

ans - we get keshav and raghav document and bhalu is not present in database.
in mai bhut sari values hoti to uski values ko - [] array ke ander rkhege
*/

/*
d) and operator - 
db.Students_data.find( 
    {
        $and : [ {condition 1} , {condition 2}] 
    }
)

db.Students_data.find( 
    {
        $and : [ { stuName : {$eq:"keshav"} } , { stuage : {$gte: 20} } ] 
    }
)
*/

/* 
e) or operator -  
db.Students_data.find( 
    {
        $or : [ { stuName : {$eq:"keshav"} } , { stuage : {$lt: 20} } ] 
    }
)
*/

/*
f) not operator - 
db.Students_data.find( 
    {
        $or : [ { stuName : {$eq:"keshav"} } , { stuage : { $not : {$lt: 20} }  } ] 
    }
)

not ka syntax - { stuage : { $not : {$lt: 20} }  } ye hai . generally ander hi likha jata hai 
*/

/*
g) exists - ye batata hai ki perticular field kis kis object mai exist karti hai
db.Students_data.find( 
    {
        stuLang : { $exists:true } 
    }
)

return all docs jisme stuLang field hai
*/

/*
h) type - ye datatype match krne ke liye use hota hai
db.Students_data.find( 
    {
        stuName : { $type : 'string' } 
    }
)

return all data where - datatype of stuName
*/


/*
MongoDb $type Operator tabel

type                                 Number                               Alias

1                                    double                               "number"
2                                    string                               "string"  
3                                    object                               "object"
4                                    array                                "array"
5                                    binary data                          "binData"
6                                    undefined                            "undefined"
7                                    objectId                             "objectId"
8                                    boolean                              "bool"
9                                    date                                 "date"
10                                    null                                 "null"
11                                   regular expression                   "regex"
12                                   javascript                            "javascript"

*/


/*
ques - write a query where 1- stuSGPA field exist kre 2- stuSGPA ka type double ho 3- stuSGPA greator than 9 ho
db.Students_data.find( 
    {
        $and : [
            { stuSGPA : { $exists:true } } , 
            { stuSGPA : { $type: 1 } } , 
            { stuSGPA : {$gte : 9 } }
        ] 
    }
)

explicite and short cut -
db.Students_data.find( 
    {
        stuSGPA : { $exists:true , $type: 1 , $gte : 9 }
    }
)
*/

/*
ques - write a query where 1- stuName field exist kre 2- stuName ka type string ho 3- stuSGPA greator than 9 ho
db.Students_data.find( 
    {
        $and : [
            { stuName : { $exists:true } } , 
            { stuName : { $type: 'string' } } , 
            { stuSGPA : {$gte : 9 } }
        ] 
    }
)
*/

/*

*/