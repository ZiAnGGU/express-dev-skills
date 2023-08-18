// controllers/skills.js
const skills = require('../models/skill');

module.exports = {
    index,
    show,
};

function show(req, res) {
    res.render('skills/show', {
        skill: skill.getOne(req.params.id)
    });
};

function index(req, res) {
    res.render('skills/index', {
        skills: skills.getAll()
    });
};