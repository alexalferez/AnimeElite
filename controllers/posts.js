const Post = require('../models/post');

module.exports = {
    create,
    index,
    deleteLike
}

async function create(req, res){

    try {
            const post = await Post.create({caption: req.body.caption, user: req.user});
            const populatedUserPost = await post.populate('user').execPopulate();
            res.status(201).json({post: populatedUserPost})
                console.log(req.body.caption)
    } catch(err){
        console.log(err)
        res.json({data: err})
    }
}

async function index(req, res){
    try {
        // this populates the user when you find the posts
        // so you'll have access to the users information 
        const posts = await Post.find({}).populate('user').exec()
        res.status(200).json({posts})
    } catch(err){

    }

}

async function deleteLike(req, res) {
    try {
        const post = await Post.findOne({'likes._id': req.params.id, 'likes.username': req.user.username});
        post.likes.remove(req.params.id)
        await  post.save()
        res.json({data: 'like removed'})
    } catch(err){
        res.json({error: err})
    }
}