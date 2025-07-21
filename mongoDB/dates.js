/*  how to create date - 
1- 
db.DatesDemo.insertMany([
   {
    _id:1001 ,
    info:'Date by using Date()',
    DOJ:Date()
   } 
])

Date() - "Mon Jul 21 2025 10:44:38 GMT+0530 (India Standard Time)"
type - string 

2- 
db.DatesDemo.insertMany([
   {
    _id:1002 ,
    info:'Date by using new Date()',
    DOJ:new Date()
   } 
])

new Date() - 2025-07-21T05:19:08.509+00:00
type - date object

note - isse date ka object mila


3- 
db.DatesDemo.insertMany([
   {
    _id:1003 ,
    info:'Date by using new ISODate()',
    DOJ:new ISODate()
   } 
])


ques - check kis date ka type string hai 
db.DatesDemo.find( 
    {
        DOJ : { $type : 'string' } 
    }
)

return 1st wali date

ques - check kis date ka type date (object) hai 
db.DatesDemo.find( 
    {
        DOJ : { $type : 'date' } 
    }
)

return 2nd and 3rd wali date

*/




/*

note - mongoDB always store dates in UTC format (jo ki universal hai)

trailing Z - it represents UTC format

a) agar trailing Z likha hai hm logo ne - to direct UTC format mai date 
b) agar trailing Z nhi likha hai hm logo ne - to phele local date apne format mai aayegi fir use UTC format mai convert kara jayega

but store hmesha UTC format mai hi store hogi

so always store date by using trailing Z 
why ?? - for clearity , aur koi un-ambiguity na aaye  

*/


/*
how to store specific date - ( jo date chliye use as a argument bhejege)
db.DatesDemo.insertMany([
   {
    _id:1004 ,
    info:'DOB by using new Date()',
    DOB:new ISODate('2005-08-30')
   } 
])
*/




/*

db.DatesDemo.find({} , {
    Date_of_join : {
        $dateToString : {
            date: '$DOJ' ,
            format: '%d-%m-%Y' ,
        }
    }
})

isse error - can't convert from BSON type string to date 
reason - sabse phele hm logo ne Date() se date banani thi thi jiska type string tha 
         uski wajh se $dateToString kaam nhi kr rha

solution - agar date ka type string hai to use hata do , datatype date per hi kaam krega .


db.DatesDemo.find({ DOJ: {$type:'date'}} , {
    Date_of_join : {
        $dateToString : {
            date: '$DOJ' ,
            format: '%d-%m-%Y' ,
        }
    }
})

output - date dikhayega
$DOJ - field name ko access krne ke liye
Date_of_join - it is a column alias ( column ko naam dena )


db.DatesDemo.find({ DOJ: {$type:'date'}} , {
    Date_of_join : {
        $dateToString : {
            date: '$DOJ' ,
            format: '%d-%m-%Y %H:%M:%S' ,
        }
    }
})
output - date + time dikhayega


db.DatesDemo.find({ DOJ: {$type:'date'}} , {
    Date_of_join : {
        $dateToString : {
            date: '$DOJ' ,
            format: '%d-%m-%Y %H:%M:%S' ,
            timezone : 'Asia/Kolkata'
        }
    }
})

timezone - India ka timezone select kra ( by default global timezone set hota )

*/





/*

*/