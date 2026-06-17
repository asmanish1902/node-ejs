import express from 'express';
import {
    index,
    create,
    store,
    edit,
    update,
    destroy
} from '../controllers/userController.js';
import { userValidationRules, validate } from '../middlewares/validators.js';

const router = express.Router();

router.get('/', index);
router.get('/create', create);
router.post('/', userValidationRules, validate, store);   // ← validation added
router.get('/:id/edit', edit);
router.put('/:id', userValidationRules, validate, update);  // ← validation added
router.delete('/:id', destroy);

export default router;