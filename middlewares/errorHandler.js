// ─── 404 Handler ──────────────────────────────────────────────────────────────
export const notFound = (req, res, next) => {
    const err = new Error(`Page Not Found - ${req.originalUrl}`);
    err.status = 404;
    next(err);
};

// ─── Global Error Handler ─────────────────────────────────────────────────────
export const errorHandler = (err, req, res, next) => {
    const statusCode = err.status || 500;
    const isDev = process.env.NODE_ENV === 'development';

    res.status(statusCode).render('error', {
        title: 'Error',
        statusCode,
        message: err.message || 'Something went wrong',
        stack: isDev ? err.stack : null
    });
};