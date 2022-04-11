const mongoose  = require('mongoose');
const StudentSchema = mongoose.Schema(
    {
        id:{type:Number, required:true},
        firstName:{type:String,required:true}
    }
);
const Students = mongoose.model('students', StudentSchema);
module.exports = Students;