const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    problem:{
        
            problemStatement:{
                type:String,
                required:true
            },
            sampleInput:{
                type:String,
                required:true
            },
            sampleOutput:{
                type:String,
                required:true
            }
    },
    answer:{
        type:String,
        required:true
    },
    testCase:{
        type:String,
        required:true
    }

},{
    timestamps:true,
});
const Question =  mongoose.model('Question',questionSchema);

module.exports = Question;