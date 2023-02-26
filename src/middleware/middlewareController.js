import jwt from 'jsonwebtoken';
const middlewareController = {
	verifyToken: (req, res, next) => {
		const token = req.headers.token;
		if (token!==undefined) {
			const accessToken = token.split(' ')[1];
			jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, doctor) => {
				if (err) {
					return res.status(403).json({ 
						refreshToken: true,
						message: 'Token is error. Reload window...' 
					});
				}
				req.doctor = doctor;
				next();
			});
		} else {
			return res.status(401).json({ status: "You're not authenticated" });
		}
	}
};
export default middlewareController;
