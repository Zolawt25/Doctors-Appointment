const Comments = require("../models/Comment")








const getComments = async (req, res)=>{
    try {
        const comment = await Comments.find(req.body)
        res.status(200).json({comment})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const createComment = async (req, res)=>{
    try {
        const comment = await Comments.create(req.body)
        res.status(201).json({comment})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const deleteComment = async(req,res)=>{
    const {id} = req.params
    const comment = await Comments.findByIdAndDelete(id)
    res.status(200).json({msg: "deleted", comment}) 
}

module.exports = {getComments, createComment, deleteComment}