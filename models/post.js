const mongoose = require('mongoose');

const likesSchema = mongoose.Schema({
    username: String,
    userId: { type: mongoose.Schema.Types.ObjectId }
})

const postSchema = new mongoose. Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    caption: String,
    title: String,
    rating: String,
    synopsis: String,
    likes: [likesSchema]
})

module.exports = mongoose.model('Post', postSchema)