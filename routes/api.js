const express = require('express');
const createJWTMiddleware = require('express-jwt')
const postsController = require('../controllers/posts-controller');

const router = express.Router();
const jwtMiddleware = createJWTMiddleware({ secret: process.env.JWT_SECRET });

router.get('/posts/:id', postsController.getSinglePost);
router.put('/posts/:id', jwtMiddleware, postsController.updateSinglePost);
router.delete('/posts/:id', jwtMiddleware, postsController.deleteSinglePost);

router.get('/posts', postsController.getPosts);
router.post('/posts', jwtMiddleware, postsController.createSinglePost);

module.exports = router;
