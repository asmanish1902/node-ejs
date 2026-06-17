import { body, validationResult } from 'express-validator';

// ─── Validation Rules ─────────────────────────────────────────────────────────
export const userValidationRules = [

    body('name')
        .trim()
        .notEmpty()
        .withMessage('Name is required')
        .isLength({ min: 3, max: 50 })
        .withMessage('Name must be between 3 and 50 characters'),

    body('email')
        .trim()
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Please enter a valid email address')
        .normalizeEmail(),

    body('role')
        .notEmpty()
        .withMessage('Role is required')
        .isIn(['Admin', 'Developer', 'Designer', 'Manager'])
        .withMessage('Invalid role selected'),

    body('status')
        .notEmpty()
        .withMessage('Status is required')
        .isIn(['Active', 'Inactive'])
        .withMessage('Invalid status selected'),

];

// ─── Validation Result Handler ────────────────────────────────────────────────
export const validate = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        // Format errors as key-value { field: message }
        const formattedErrors = {};
        errors.array().forEach(err => {
            formattedErrors[err.path] = err.msg;
        });

        // Store in flash and redirect back
        req.flash('errors', JSON.stringify(formattedErrors));
        req.flash('old', JSON.stringify(req.body));   // keep old input
        return res.redirect('back');
    }

    next();
};