/*
RDBMS mai - agar existing table mai new column add krna ho to -
update chlega na ki insert ( insert se new row or record insert hota)
*/

// --------------------------------------------------------------------------------------------------------

/*
insert value in array - 

push , addToSet - to add element in the array

1) push - last mai value add kar Deta  ( bhale hi duplicate value ho matlab value phele se present ho)
2) addToSet - 

add element in an array using push - 

db.Students_data.updateOne(
 { stuName : "ritu" } ,
 { $push: {stuLang : "c++"} }
)

db.Students_data.updateOne(
 { stuName : "ritu" } ,
 { $addToSet: {stuLang : "c++"} }
)

*/ 


// --------------------------------------------------------------------------------------------------------

/*

remove element from array - $pull

db.Students_data.updateOne(
 { stuName : "ritu" } ,
 { $pull: {stuLang : "c++"} }
)

*/


// -------------------------------------------------------------------------------------------------------- 
/*
find element in an array - 

a)
agar array mai element present hai . for ex stuLang mai jaha c++ hai wo wo select

db.Students_data.find(
 { stuLang : "c++" }
)

b)
select array jaha 2 given values present ho 

db.Students_data.find(
 { stuLang : { $all : ['c++' , 'c'] } }
)

ans - jis jis array mai c++ and c dono present hoge wo wo document select ho jayege

c)
select array based on condition -  using elemMatch 

db.Students_data.find(
 { stuMarks : { $elemMatch : { $gt : 90 } } }
)

ans - wo array select ho jayegi jisme stuMarks array mai 90 se bada element present hai

*/



/*
d)
update the perticular value in index ( for ex- replace the value in array from java to cpp )

approach - 

db.Students_data.updateOne(
 { stuName : "krish" } ,
  { $set : { stuLang : 'c plus plus' } }
)

isme hamne krish ko select kra aur stuLang array mai value ko c plus plus select kar diya.

but problem is - ab stuLang array 


db.Students_data.updateOne(
 { stuName : "krish" , stuLang : "java" } ,
  { $set : { 'stuLang.$' : 'cpp' } }
)

*/


// --------------------------------------------------------------------------------------------------

/*

a) count - count no of total records 
db.Students_data.find().count()  

b) y
db.Students_data.find().limit(2)

c)
db.Students_data.find().skip(2)

d) sort - 

db.Students_data.find().sort( {field1 : 1 or -1 } )

1 represents - ascending order
2 represents - descending order

ex - db.Students_data.find().sort( {stuSGPA : 1 } )

sort based on 2 fields -
db.Students_data.find().sort( { stuSGPA:1 , age:1 } )

ans - phele stuSGPA ke basis per select krege . agar 2 recordes ke stuSGPA same hai to age ke basis per unn dono ko select krega

*/



/*
ques - return that student who have 3rd heighest stuSGPA ( having 3rd rank )
return the 3rd heighest stuSGPA record

db.Students_data.find().sort( { stuSGPA:-1  } ).skip(2).limit(1)

approach - 
1) sabse phele descending order mai sort kara .  sort( { stuSGPA:-1  } )
hightest sgpa top per 

2) 1st and 2nd rank nhi chiye to use skip karege . skip(2)

3) ab ham log 3rd hightest rank per hai .  
   hme kewal 3rd rank wala hi record chiye to - limit(1)


final ans - db.Students_data.find().sort( { stuSGPA:-1  } ).skip(2).limit(1)

*/