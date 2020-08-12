const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/NodeCrud', { useNewUrlParser : true , useUnifiedTopology : true}, (err) =>{
    if(!err)
    {
        console.log("Connection Successfully Done");
    }
    else{
        console.log("Connection Error" + err);
    }
});
require('./student.model');