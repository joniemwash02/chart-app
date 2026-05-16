import jwt from 'jsonwebtoken';

export const generateToken = (UserId, res) => {
    const token = jwt.sign({ UserId: UserId }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    });
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'development' ? false : true,
        maxAge: 7* 24 * 60 * 60 * 1000,
        sameSite: 'strict',

    });
    return token;
};