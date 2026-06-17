import User from '../models/User.js';

// GET /users
export const index = async (req, res, next) => {
    try {
        const users = await User.find().sort({ createdAt: -1 });
        res.render('index', { users, title: 'All Users' });
    } catch (err) {
        next(err);    // ← passes to global error handler
    }
};

// GET /users/create
export const create = (req, res) => {
    res.render('create', { title: 'Add User' });
};

// POST /users
export const store = async (req, res, next) => {
    try {
        const { name, email, role, status } = req.body;
        await User.create({ name, email, role, status });
        req.flash('success', 'User created successfully!');
        res.redirect('/users');
    } catch (err) {
        next(err);
    }
};

// GET /users/:id/edit
export const edit = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            const err = new Error('User not found');
            err.status = 404;
            return next(err);   // ← throws 404 properly
        }
        res.render('edit', { user, title: 'Edit User' });
    } catch (err) {
        next(err);
    }
};

// PUT /users/:id
export const update = async (req, res, next) => {
    try {
        const { name, email, role, status } = req.body;
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { name, email, role, status },
            { new: true, runValidators: true }
        );
        if (!user) {
            const err = new Error('User not found');
            err.status = 404;
            return next(err);
        }
        req.flash('success', 'User updated successfully!');
        res.redirect('/users');
    } catch (err) {
        next(err);
    }
};

// DELETE /users/:id
export const destroy = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            const err = new Error('User not found');
            err.status = 404;
            return next(err);
        }
        req.flash('success', 'User deleted successfully!');
        res.redirect('/users');
    } catch (err) {
        next(err);
    }
};