const jwt = require('jsonwebtoken');

const authCheck = async (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unathorized' });
  }

  try {
    const decoded = await jwt.verify(token, process.env.SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Forbidden' });
  }
};

module.exports = authCheck;
