const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required!"],
    },
    punchline: {
        type: String,
        required: [true, "Can't have a joke without a punchline!"],
    }
},{ timestamps:true }
);

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;
