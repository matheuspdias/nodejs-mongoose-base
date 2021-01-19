const User = require('../models/User');

module.exports = {
    ping: (req,res) => {
        res.json({error: '', pong:true});
    },
    getUsers: async (req, res) => {
        const users = await User.find();

        if(users) {
            res.json({error: '', users})
        } else {
            res.json({error: 'Nenhum usuário cadastrado'})
        }
    }
};