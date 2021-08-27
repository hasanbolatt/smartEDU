const mongoose = require('mongoose');
const slugify = require('slugify');

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
    },
    slug: {
        type: String,
        unique: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'//Bağlacank modelin adını yaz
    }
});

CourseSchema.pre('validate',function(next){
    this.slug = slugify(this.name, {
        lower:true,
        strict: true
    });

    next();
});

const Course = mongoose.model('Course',CourseSchema);
module.exports = Course;