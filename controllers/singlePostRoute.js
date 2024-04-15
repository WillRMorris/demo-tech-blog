const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');
// /post/ routes

//gets the single post view for a specific comment
router.get('/:id', withAuth, async(req , res)=> {
    const postData = await Post.findByPk(req.params.id, {include: {model: User}});
    const post = postData.get({plain: true});
    const commentData = await Comment.findAll(
        {
        where: {post_id: post.id},
        include: {model: User}
        })
    const comments= commentData.map((comment) => comment.get({plain: true}))
    res.render('post', {
        post,
        comments,
      logged_in: req.session.logged_in,

    })

    })

    module.exports = router;