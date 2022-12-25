const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

class JwtService {
    static sign(payload, expiry = '60s', secret = JWT_SECRET) {
        return jwt.sign(payload, secret, {expiresIn: expiry});
    }
}

module.exports = JwtService;