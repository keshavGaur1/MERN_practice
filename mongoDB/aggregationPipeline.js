// Aggregation - bhut sare elements hoge per ek hi output . ex - min , max , sum .

// Aggregation operation - these operations allows you to group , sort , perform calculation

// Aggregation pipeline mai - ek process ka output dusri process ka input hota hai.
// these pipelines can have 1 or more than 1 stages (multple stages)


/**    
how to make Aggregation pipelines - 

db.collection.aggregate( [ {},{},{} ])

aggregate function accepts array of objects
*/


// ----------------------------------------------------------------------------------------------------------

/** 
a) 

db.aggregation_employees.aggregate([
    {
        $project : {firstName:1 , lastName:1 }
    }
])
*/



/**
b)

db.aggregation_employees.aggregate([
    {
        $project : {firstName:1 , lastName:1 , gender:1 }
    },
    {
        $match : { gender : 'female' }
    }
])

db.aggregation_employees.aggregate([
    {
        $project : {firstName:1 , lastName:1 , salary:1 }
    },
    {
        $match : { salary : {$gte:7000} }
    }
])

 */




/**
c)
group -  

db.aggregation_employees.aggregate([
    {
        $group : { _id : '$gender' }
    }
])

_id - ye necessary field hai. jo new group banege use _id ki help se uniquely identify krege.  (new group ka naam - _id like gender ke case mai male and female)  
'$gender' or '$filedName' - jis field ke basis per grouping krni hai
$ -> gender ki value ko 


db.aggregation_employees.aggregate([
    {
        $group : { _id : '$department.name' }
    }
])

 */



// --------------------------------------------------------------------------

// aggregation operations - 

/**
 
sum - find no of employees in each department

db.aggregation_employees.aggregate([
    {
        $group : { _id : '$department.name' ,
                TotalEmployees : { $sum : 1 }
        }
    }
])

$sum:1 - ye batayega ki jab jab koi employee mile to uske sum mai +1 kro (TotalEmployees= 3)
$sum:5 - ye batayega ki jab jab koi employee mile to uske sum mai +5 kro (TotalEmployees= 15)

 */


db.aggregation_employees.aggregate([
    {
        $group : { _id : '$department.name' ,
                TotalEmployees : { $sum : 1 } ,
                TotalSalary : { $sum : '$salary' }
        }
    }
])


/*
ques - for every department , find the no of employes , TotalSalary , AverageSalary  , MaxSalary , MinSalary

db.aggregation_employees.aggregate([
    {
        $group : { _id : '$department.name' ,
                TotalEmployees : { $sum : 1 } ,
                TotalSalary : { $sum : '$salary' } ,
                AverageSalary : { $avg : '$salary' } ,
                MaxSalary : { $max : '$salary' } ,
                MinSalary : { $min : '$salary' }
        }
    }
])
*/


/*
ques - sort the data of above ques based on TotalSalary ( descending order mai )

db.aggregation_employees.aggregate([
    {
        $group : { _id : '$department.name' ,
                TotalEmployees : { $sum : 1 } ,
                TotalSalary : { $sum : '$salary' } ,
                AverageSalary : { $avg : '$salary' } ,
                MaxSalary : { $max : '$salary' } ,
                MinSalary : { $min : '$salary' }
        }
    } , 
    {
        $sort : { TotalSalary : -1 }
    }
])

*/



/*
ques - uper wale question ke ans se bas 3 hi records mile 
ans - using limit

db.aggregation_employees.aggregate([
    {
        $group : { _id : '$department.name' ,
                TotalEmployees : { $sum : 1 } ,
                TotalSalary : { $sum : '$salary' } ,
                AverageSalary : { $avg : '$salary' } ,
                MaxSalary : { $max : '$salary' } ,
                MinSalary : { $min : '$salary' }
        }
    } , 
    {
        $sort : { TotalSalary : -1 }
    } , 
    {
        $limit : 3 
    }
]) 

*/


// --------------------------------------------------------------------------------

/*

sample - ham chate hai jo hamara final result ho ( suppose final result mai 5 records hai) 
        to usme kewal kuch hi result records randomly show ho

db.aggregation_employees.aggregate([
    {
        $group : { _id : '$department.name' ,
                TotalEmployees : { $sum : 1 } ,
                TotalSalary : { $sum : '$salary' } ,
                AverageSalary : { $avg : '$salary' } ,
                MaxSalary : { $max : '$salary' } ,
                MinSalary : { $min : '$salary' }
        }
    } , 
    {
        $sort : { TotalSalary : -1 }
    } , 
    {
        $sample : { size : 2 }
    }
])


$sample : { size : 2 } - size batayega ki final result ki koi bhi 2 random value dikha do

*/


//---------------------------------------------------------------------------------

/*

sortByCount = grouping + count + sorting 

phele field ke basis per group krna , har group mai kitne element present hai wo batayega aur data ko sorted order mai present krega ( descending order mai)

db.aggregation_employees.aggregate([
    {
        $sortByCount : '$department.name'
    }
])
*/



// ------------------------------------------------------------------------------

/*

unwind - ye array ki values ki basis per document ko divide krta hai .

for ex - 
{
    name : 'A' ,
    lang : ['c' , 'c++' ]
}

iss data ko lang array ki value ke basis per alag alag document mai divide kr dega

[
    {
        _id : 1 ,
        name : 'A' ,
        lang : ['c' , 'c++' , 'java']
    },
    {
        _id : 2 ,
        name : 'B' ,
        lang : ['c++' , 'java']
    },
    {
        _id : 3 ,
        name : 'C' ,
        lang : [ 'java']
    }
]

db.Students_data.aggregate([
    {
        $unwind : '$lang'
    }
])


db.Students_data.aggregate([
    {
        $unwind : '$stuLang'
    }
])



db.Students_data.aggregate([
    {
        $unwind : '$stuLang'
    },
    {
        $group : { _id : '$stuLang' , TotalStudents : { $sum : 1 } } 
    }
])

*/








