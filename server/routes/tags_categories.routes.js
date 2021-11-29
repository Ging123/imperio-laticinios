const express = require('express');
const router = express.Router();
const tagCategoriesController = require('../controllers/tags_categories.controller');
const AuthMiddleware = require('../middlewares/auth.middleware');

router.get('/categories', tagCategoriesController.getCategories);
router.get('/tags', tagCategoriesController.getTags);
router.post('/categories', AuthMiddleware.mustBeAuthenticated, AuthMiddleware.isAdmin, tagCategoriesController.createCategory);
router.post('/tags', AuthMiddleware.mustBeAuthenticated, AuthMiddleware.isAdmin, tagCategoriesController.createTag);
module.exports = router;