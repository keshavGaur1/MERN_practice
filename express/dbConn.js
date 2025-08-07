
const mongoose = require('mongoose')

const mongoURI = 'mongodb://127.0.0.1:27017/allenhouse_db'





// mongoose.connect(mongoURI) --  it always return promise 
mongoose.connect(mongoURI)
.then( ()=> {
    console.log('connection established successfully');  
})
.catch( (err) => {
    console.log('database connection failed' + err );
} )

module.exports = mongoose