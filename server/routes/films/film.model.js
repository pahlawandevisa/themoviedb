var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var Genre = require('./../genre/genre.model');

var filmSchema = new Schema({
    vote_count: {
        type: Number,
        default: 0
    },
    video: {
        type: Boolean,
        default: false
    },
    vote_average: {
        type: Number,
        default: 0
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    popularity: {
        type: Number,
        default: 0
    },
    poster_path: {
        type: String
    },
    original_language: {
        type: String,
        required: true,
    },
    original_title: {
        type: String,
        required: true,
    },
    genre_ids: [{
        type: Number,
        required: true,

    }],
    backdrop_path: {
        type: String
    },
    adult: {
        default: false,
        type: Boolean
    },
    overview: {
        type: String,
        required: true
    },
    release_date: {
        type: Date,
        required: true
    }

}, { toJSON: { virtuals: true } });

filmSchema.virtual('genre', {
    ref: 'genre', // The model to use
    localField: 'genre_ids', // Find people where `localField`
    foreignField: 'id', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: false
});

var Film = mongoose.model('Film', filmSchema);

module.exports = Film;
