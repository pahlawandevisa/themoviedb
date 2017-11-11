var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var genreSchema = new Schema({
    id:Number,
    name:String
});

genreSchema.post('remove',function(data){
    console.log(data);
})

var Genre = mongoose.model('genre',genreSchema);

module.exports = Genre;
