const List = require('../models/list');

module.exports = {
    create,
    deleteLike
}

async function create(req, res){

    try {
        const list = await List.findById(req.params.id);
        list.likes.push({username: req.user.username, userId: req.user._id});
        await list.save()
        res.status(201).json({data: 'like added'})
    } catch(err){
        res.json({data: err})
    }
}

async function deleteLike(req, res) {
    try {
        const list = await List.findOne({'likes._id': req.params.id, 'likes.username': req.user.username});
        list.likes.remove(req.params.id)
        await  list.save()
        res.json({data: 'like removed'})
    } catch(err){
        res.json({error: err})
    }
}