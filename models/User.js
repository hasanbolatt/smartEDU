const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const slugify = require('slugify');

const Schema = mongoose.Schema;

const USerSchema = new Schema({
    name: {
        type: String,
        required: true//Zorunu doldurma alanı olup olmaması için
    },
    email: {
        type: String,
        required: true,
        unique:true
        //trim: true //başta ve sondaki gereksiz boşlukları kaldırır.
    },
    password: {
        type:String,
        required:true
    }
});

USerSchema.pre('save',function(next){
    const user = this;
    bcrypt.hash(user.password,10,(error,hash)=>{
        user.password = hash;
        next();
    })
})

const User = mongoose.model('User',USerSchema);
module.exports = User;