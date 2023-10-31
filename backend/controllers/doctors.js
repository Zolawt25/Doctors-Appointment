const Doctor = require("../models/Doctor")

const getAllDoctors = async (req, res)=>{
    const {name, specialty} = req.query
    try {
        const doctorQuery = {}
        if (name) {
            doctorQuery.name = {$regex: name, $options: "i" }
        }
        if (specialty) {
            doctorQuery.specialty = {$regex: specialty, $options: "i" }
        }
        const doctor = await Doctor.find(doctorQuery)
        res.status(200).json({doctor})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const createDoctor = async (req, res)=>{
    try {
        const doctor = await Doctor.create(req.body)
        res.status(201).json({doctor})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const getDoctor = async (req, res)=>{
    const {id} = req.params
    try {
        const doctor = await Doctor.findOne({_id: id})
        res.status(200).json({doctor})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const updateDoctor = async (req, res)=>{
    const {id} = req.params
    try{
        const doctor = await Doctor.findByIdAndUpdate({_id: id}, req.body, {new: true})
        res.status(200).json(req.body)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}
const deleteDoctor = async (req, res)=>{
    const {id} = req.params
    try {
        const doctor = await Doctor.findByIdAndDelete(id)
         res.status(200).json({doctor})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = { getAllDoctors, createDoctor, getDoctor, updateDoctor, deleteDoctor }