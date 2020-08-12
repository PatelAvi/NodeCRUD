const mongoose = require('mongoose');

var studenschema = new mongoose.Schema({
    fullname : { type : String , require : true},
    lastname : { type : String, require : true},
    mobile : { type : String, require: true},
    city : { type : String, require : true}

});

mongoose.model('Student' , studenschema);