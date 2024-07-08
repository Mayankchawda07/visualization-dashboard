const visuals = require('./modal')

exports.getData = async (req, res) => {
    try {
        const getData = await visuals.find({}).sort({ createdAt: -1 })
        res.status(200).json({
            status: 'True',
            message: 'Success',
            data: getData
        })
    } catch (error) {
        res.status(500).json({
            status: 'False',
            message: 'Failed'
        })
    }
}