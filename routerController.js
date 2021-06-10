const about = (req, res) => {
	res.sendFileFromStatic("about.html")
}

const notFound = (req, res) => {
	res.sendFileFromStatic("404.html")
}

const contactMe = (req, res) => {
	res.sendFileFromStatic("contact-me.html")
}

//module.exports = about
module.exports = { about, notFound, contactMe }
