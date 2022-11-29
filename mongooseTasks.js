var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var schema = mongoose.Schema({ name: String })
schema.methods.charge = function(){
    console.log(this.get("name") + " fueled with beer")
}

var Bara = mongoose.model('Bara', schema)

var baratroomchik = new Bara({ name: 'Baratroom' })
baratroomchik.save(function (err) {
    baratroomchik.charge()
})
