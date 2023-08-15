const skills = [
    {id: 100, skill: 'Communication', level: '⭐️⭐️⭐️'},
    {id: 101, skill: 'Leadership', level: '⭐️⭐️⭐️'},
    {id: 102, skill: 'Problem Solveing', level: '⭐️⭐️⭐️⭐️'},
    {id: 103, skill: 'Creativity', level: '⭐️⭐️⭐️⭐️⭐️'},
    {id: 104, skill: 'Management', level: '⭐️⭐️⭐️⭐️⭐️'},
];

module.exports = {
    getAll,
    getOne
};

function getOne (id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
};

function getAll() {
    return skills;
};