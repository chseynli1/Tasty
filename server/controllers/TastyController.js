const { Tasty } = require("../models/Tasty.model")

const TastyController = {
    getAll: async (req, res) => {
        try {
            const tasty = await Tasty.find({})
            res.status(200).send(tasty)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const target = await Tasty.findById(id)
            res.status(200).send(target)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    add: async (req, res) => {
        try {
            const { image, name, composition, price } = req.body
            const newTasty = new Tasty({ image, name, composition, price })
            await newTasty.save()
            res.status(200).send("item created")
        } catch (error) {
            res.status(404).send(error)
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            const deleteData = await Tasty.findByIdAndDelete(id)
            res.status(200).send(deleteData)
        } catch (error) {
            res.status(404).send(error)
        }
    }
}

module.exports = { TastyController }