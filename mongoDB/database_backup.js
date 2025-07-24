/*

download mongodb-database-tools

mongodump --version  // ab mongodump chalna chiye (uska version pata chalega)\



// --------------------------------------------------------------------------------------------------------------------------------------
1) backup of complete dababase in binary format

using mongodump - 

check version - mongodump --version

syntax - mongodump --db {DB_NAME} --out {LOCATION}

DB_NAME - database jiska backup apni machine per lena hai
LOCATION - jaha ye database apni machine per store krana hai


mongodump --db allenhouse_db --out c:\


imp note - jab database ka backup lo mongodump se to -- data json ke binary format mai aata hai






// ---------------------------------------------------------------------------------------------------------------------------------

2) restore the database - save backup of database present in binary format in new mongoDB database

using mongoexport - 

check version - mongoexport --version

syntax - mongorestore --db {DB_NAME} --collection {COLLECTION_NAME} {LOCATION}

DB_NAME - name of new database jisme hme computer se data laake store krana hai
COLLECTION_NAME - database DB_NAME mai konse collection ko restore krana tha .
LOCATION - location of database jo hmare computer mai save hai aur ise restore krana hai


mongorestore --db restoredDB --collection DatesDemo C:\allenhouse_db\DatesDemo.bson




//----------------------------------------------------------------------------------------------

3)  backup of complete dababase in json or .csv format

using mongoexport - 

check version - mongoexport --version

syntax - mongoexport --db={DB_NAME} --collection={COLLECTION_NAME} --out={LOCATION}

DB_NAME - jis database ka backup lena h apne computer per
COLLECTION_NAME - jis database ka backup lena h apne computer per
LOCATION - location jaha data store ho 


// d drive mai normally export ho jayega data (database se backup)
mongoexport --db=employees --collection=managers --out=d:\\managers.json

// c drive mai backup ke liye - cmd ko run as administrator krna pdega
mongoexport --db=employees --collection=managers --out=c:\managers.csv






//----------------------------------------------------------------------------------------------

4) Import data (which is saved in csv or json format) to database 

using mongoimport -

check version - mongoimport --version

syntax - mongoimport --db={DB_NAME} --collection={NEW_COLLECTION} --file={LOCATION/FILE_NAME.TYPE} --type={TYPE}


DB_NAME - jis database mai import krana hai
NEW_COLLECTION - jo collection ka naam chaiye ( ki iss name ke collection mai data store ho)
LOCATION - location where the file is stored ( jaha file save hai ) 
FILE_NAME - jis naam se file save hai aur isi ka backup lena hai
TYPE - .json or .csv


mongoimport --db=test --collection=manager_coll --file=D:\managers.json --type=json





// ===========================================================================================================

1) In binary format (BSON)

a) backup : mongodump
b) restore : mongorestore


2) In JSON/CSV format 

a) backup : mongoexport
b) restore : mongoimport



*/


