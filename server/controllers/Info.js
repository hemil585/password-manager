const Info = require('../models/Info')


exports.addInfo = async (req,res) => {
    try {
        // const {sitename,password} = req.body
        const info = await Info.create(req.body)
        res.status(201).json(info)
    } catch (error) {
        console.error(error);
        res.status(400).json(error)
    }
}