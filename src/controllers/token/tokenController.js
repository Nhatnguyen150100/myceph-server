import jwt from 'jsonwebtoken';

const tokenController = {
  generateAccessToken: (doctor) => {
		return jwt.sign(
			{
				id: doctor.id,
				email: doctor.email,
			},
			process.env.JWT_ACCESS_KEY,
			{
				expiresIn: '2h',
			},
		);
	},
  generateRefreshToken: (doctor) => {
		return jwt.sign(
			{
				id: doctor.id,
				email: doctor.email,
			},
			process.env.JWT_REFRESH_KEY,
			{
				expiresIn: '1d',
			},
		);
	}
}

export default tokenController;