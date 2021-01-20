const jwt = require('jsonwebtoken');

module.exports = function Authorization(req, res, next) {
	const authToken = req.headers['authorization'];

	if (authToken != undefined) {
		var bearerToken = authToken.split(' ');
		var token = bearerToken[1];

		try{
			var decoded = jwt.verify(token, process.env.JWT_KEY);

			if(decoded){
				next();
			}else {
				res.status(406).send({
					Message: "You are not allowed"
				})	
			}
		}catch(error){
			res.status(406).send({
				Message: "Token is invalid"
			})
		}
	}else{
		res.status(401).send({
			Message: "Not authorized"
		})
	}
}