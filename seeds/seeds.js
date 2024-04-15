const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models/index');

let userData = require('./user-seeds.json');
let postData = require('./post-seeds.json');
let commentData = require('./comment-seeds.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    
    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true
    });
    
    await Post.bulkCreate(postData);
    await Comment.bulkCreate(commentData);

    console.log("Database Seeded");

    process.exit(0)
}

seedDatabase();
