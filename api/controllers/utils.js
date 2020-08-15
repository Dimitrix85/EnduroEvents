const { cloudinary } = require('../config/cloudinary')

module.exports = {
    post: {
        upload: async (req, res) => {
            try {
                const fileStr = req.body.data;
                const uploadResponse = await cloudinary.uploader.upload(fileStr)
                res.send(uploadResponse)
            } catch (err) {
                res.status(500).json({ err: 'Something went wrong' })
            }
        }
    }
};

