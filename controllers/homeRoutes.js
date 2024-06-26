const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');
//home routes, or in this case, discussion routes

//gets the discussion page if logged in
router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: {model: User},
      order: [['updatedAt', 'DESC']],
    });
    const posts= postData.map((post) => post.get({plain: true}))
    res.render('discussion', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});
//gets login page if not
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;