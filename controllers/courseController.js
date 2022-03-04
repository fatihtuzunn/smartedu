const Course = require('../models/Course');


exports.createCourse = async (req, res) => {
    const course = await Course.create(req.body);

    try {
        res.status(200).json({
            status: 'success',
            course
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            error,
        })        
    }

}