const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true//Zorunu doldurma alanı olup olmaması için
    },
    description: {
        type: String,
        //unique: true,
        required: true,
        trim: true //başta ve sondaki gereksiz boşlukları kaldırır.
    },
    createdAt: {
        type: Date,
        default: Date.now  
    }
});

const Course = mongoose.model('Course',CourseSchema);
module.exports = Course;