var mongoose = require('mongoose')
var Schema = mongoose.Schema


var Bara = new Schema({
title: String,
nick: {
type: String,
unique: true,
required: true
},
avatar: String,
desc: String,
created:{
type:Date,
default:Date.now
}
})
module.exports.Bara = mongoose.model("Bara", Bara)
