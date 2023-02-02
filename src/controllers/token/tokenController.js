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
				expiresIn: '1h',
			},
		);
	},
}

export default tokenController;