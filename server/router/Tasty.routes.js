const express = require("express")
const { TastyController } = require("../controllers/TastyController")

const router = express.Router()

router.get('/', TastyController.getAll)
router.get('/:id', TastyController.getById)
router.post('/', TastyController.add)
router.delete('/:id', TastyController.delete)

module.exports = router