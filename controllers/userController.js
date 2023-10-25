const { User, Thought } = require('../models');

module.exports = {
    async getUsers(req, res) {
        try{
            const users = User.find();
            res.json(users)
        } catch (err) {
            res.status(500).json(res);
        }
    },
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.id })
            .select('-__v');

            if(!user) {
                return res.status(404).json({message: 'No user with that ID'})
            };

            res.json(user);
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async createUser(req, res) {
        try {
          const user = await User.create(req.body);
          res.json(user);
        } catch (err) {
          res.status(500).json(err);
        }
      },
};