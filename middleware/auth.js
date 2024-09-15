const jwt = require('jsonwebtoken');

// Middleware to check for a valid JWT token
module.exports = function (req, res, next) {
    // Get token from headers
    const token = req.header('Authorization')?.split(' ')[1];  // 'Bearer <token>'

    if (!token) {
        return res.status(401).json({ message: 'No token provided, authorization denied' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;  // Attach the userId to the request object
        req.role = decoded.role;      // Attach the role (teacher or student) to the request object
        next();  // Continue to the next middleware or route handler
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};
