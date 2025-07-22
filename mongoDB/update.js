/*
updateOne() - update 1 document
updateMany() - update more than 1 document


db.Students_data.updateOne({filter,update ,option})    (filter = select krna value ko)

1- update single value
db.Students_data.updateOne({ stuName:{$eq:"keshav"}} ,
    {
        $set : { stuSGPA : 9.1}
    }
)

2- update multiple value
db.Students_data.updateOne({ stuName:{$eq:"keshav"}} ,
    {
        $set : { stuSGPA : 8.2 , stuage:16 }
    }
)

*/




/*
query - kuch students ke naam given hai unn sabki age change krdo
solution - 1- select all students using in operator 2- update values by using updateMany
db.Students_data.updateMany( 
    {
        stuName : { $in : ['keshav','raghav','rastogi'] }
    },
    {
        $set : { stuage:23 }
    }
)
*/




/*

option - 

agar abhi naam se koi student nhi h aur hm use select kre - 
db.Students_data.updateOne({ stuName:{$eq:"abhi"}} ,
    {
        $set : { stuSGPA : 8.2 , stuage:16 }
    }
)

to isse kuch nhi hoga .

But ham chahte hai ki agar ye student present nhi hai collection mai , to ise update krne per ye as a new entity save ho jaye

so we use option (3rd parameter of update)
{ upsert : true } karne se data store ho jayega

db.Students_data.updateOne({ stuName:{$eq:"abhi"}} ,
    {
        $set : { stuSGPA : 8.2 , stuage:16 }
    } ,
    {
        upsert : true 
    }
)

new record abhi created with stuSGPA and stuage
*/




/*
Rename the field -

syntax - 
db.collection.updateMany(
  { <filter> },
  { $rename: { "<oldFieldName>": "<newFieldName>" } }
)


db.Students_data.updateMany( 
    {},
    {
        $rename : { "stuage" : "age" }
    }
)
*/



/*
how to remove a field  - using unset - 
db.Students_data.updateOne({ stuName:{$eq:"abhi"}} ,
    {
        $unset : { stuSGPA ; ''  }
    } ,
)

abhi ki SGPA wali field hat jayegi 

how to remove multiple fields - 

db.Students_data.updateOne({ stuName:{$eq:"abhi"}} ,
    {
        $unset : { stuName : '' , age : ''  }
    } ,
)

*/




/*
task - ek nayi field (bio)  add karna hai kuch records mai
db.Students_data.updateMany(
    { stuName : { $in:['keshav','raghav'] } } ,
    { $set: {'bio' : 'i am btech student' } }
)
*/




/*
new task - bio mai jab 'i am btech student' pura pura match hoga tabhi ye document select hoga 

per ab hm chahte hai jiske bhi bio mai 'btech student' hai wo select ho jaye .

solution -

pura pura mil jaye uske liye - 
db.Students_data.find(
 { bio : 'i am btech student'}
)

now - 
db.Students_data.find(
 { bio : /btech student/}
)

ab /btech student/ ki wajh se ye jaha bhi btech student ho wo wo select ho jayega

*/




/*

new Task - btech ki jagah BTECH ho to bhi select ho jaye 

how ?? hme text ko case in sensitive banana hoga

case in-sensitive krne ke liye - /i add krdo text ke last mai

db.Students_data.find(
 { bio : /BTECH/i}
)

ab BTECH aur btech same consider hoga
*/




/*

jo bhi stuName s se start ho ( ^ represents starting)
db.Students_data.find(
 { stuName : /^s/i }
)

jo bhi stuName s se end ho ( $ represents ending)
db.Students_data.find(
 { stuName : /s$/i }
)

third character s ho , usse phele koi bhi 2 characters ho sakte hai
db.Students_data.find(
 { stuName : /^.{2}s/i }
)

last se second character t ho. end character koi bhi ho sakta
db.Students_data.find(
 { stuName : /t.{1}$/i }
)

*/




// ------------------------------------------------------------------------------------------------------------------------

/*

delete - 

deleteOne() - update 1 document
deleteMany() - delete more than 1 document

symtax - db.Students_data.deleteOne( {<filter>} )

*/















