const mongoose = require('mongoose')

const movieSchema = mongoose.Schema ({
    title: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    stars: {
        type: [String],
        required: true,
    },
    image: {
        type: String,
    },
    description: {
        type: String,
        required: true,
    },
    showtimes: {
        type: [String],
        required: true,
    }
})

const Movie = mongoose.model('Movie, movieSchema')
