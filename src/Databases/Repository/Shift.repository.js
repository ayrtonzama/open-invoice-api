const {default:ShiftModel} = require('../Models/Shift.model')

exports.createShift=async(body)=>{
    try {
        const shift=await ShiftModel.create(body)
        return shift
    } catch (error) {
        throw error;
    }
}

exports.getAllShifts=async(user_id)=>{
try {
    // const shifts=await ShiftModel.find({})
} catch (error) {
    throw error;
}
}