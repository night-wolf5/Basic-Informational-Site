const express = require("express")
const router = express.Router()
const { about, notFound, contactMe } = require("./routerController")

router.get("/about", about)
router.get("/contact-me", contactMe)
router.all("*", notFound)

module.exports = router
