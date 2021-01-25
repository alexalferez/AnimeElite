const mongoose = require('mongoose');

const likesSchema = mongoose.Schema({
    username: String,
    userId: { type: mongoose.Schema.Types.ObjectId }
})

const listSchema = new mongoose. Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    ListItem: String,
    likes: [likesSchema]
})

module.exports = mongoose.model('List', listSchema)