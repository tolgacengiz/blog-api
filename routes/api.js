const express = require('express');
const postsController = require('../controllers/posts-controller');

const router = express.Router();

router.get('/posts/:id', postsController.getSinglePost);
router.put('/posts/:id', postsController.updateSinglePost);

router.get('/posts', postsController.getPosts);
router.post('/posts', postsController.createSinglePost);

module.exports = router;
