const User = require('../models/user')
const Skill = require('../models/skills')


module.exports = {
    updateUser: async(req, res) =>{
        try {
            await User.findByIdAndUpdate(req.user.id,
                {$set: req.body}, {new:true})
                res.status(200).json({status: true})
        } catch (error) {
            res.status(500).json({error: error})
        }
    },

    deleteUser: async(req, res) =>{
        try {
            await User.findByIdAndDelete(req.user.id)
            res.status(200).json({status: true})
        } catch (error) {
            res.status(500).json({error: error}) 
        }
    },

    getUser: async(req, res) =>{
        try {
            const profile = await User.findById(req.user.id)
            const {password, createdAt, updateAt, __v, ...userData} = profile._doc;
            res.status(200).json(userData)
        } catch (error) {
            res.status(500).json({error: error}) 
        }
    },

//skills
     addSkills: async(req, res) =>{
        const newSkill = new Skill({userId: req.user.id, skill: req.body.skill})
        try {
            await newSkill.save();
            await User.findByIdAndUpdate(req.user.id, {$set: {skills: true}})
            res.status(200).json({status: true})
        } catch (error) {
            res.status(200).json({status: true})
        }
     },

     getSkills: async(req, res) =>{
        const userId = req.user.id;
        try {
            const skills = await Skill.find({userId: userId}, {createdAt: 0, updateAt: 0, __v:0});

            if(skills.length===0){
                return res.status(200).json([]);
            }
            res.status(200).json(skills);
        } catch (error) {
            res.status(500).json({error: error}) 
        }
     },

     deleteSkills: async(req, res) =>{
        const id = req.params.id;
        try {
            await Skill.findByIdAndDelete(id)
            res.status(200).json({status: true})
        } catch (error) {
            res.status(500).json({error: error}) 
        }
     }
}