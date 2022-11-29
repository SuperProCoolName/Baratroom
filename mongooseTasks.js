var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test1')
var Bara = require("./models/bara").Bara


var baratroomchik = new Bara({
title: "Baratroom",
nick: "Baratroom_Standart"
})


console.log(baratroomchik)
baratroomchik.save(function(err, baratroomch, affected){
console.log(baratroomch.title)
})