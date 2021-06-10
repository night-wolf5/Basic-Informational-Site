const path = require("path")

const sendFromStatic = (req, res, next) => {
	res.sendFileFromStatic = (file) => {
		console.log(path.resolve(__dirname, "public/" + file))
		return res.sendFile(path.resolve(__dirname, "public/" + file))
	}
	next()
}

module.exports = sendFromStatic
