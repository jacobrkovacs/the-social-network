const { User, Thought } = require('../models');

module.exports = {
    async getUsers(req, res) {
        try{
            const users = await User.find()
            res.json(users);
        } catch (err) {
            res.status(500).json(err.message);
        }
    },
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({username: req.params.username})
            .select('-__v')
            .populate('thought')

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
    async deleteUser(req, res) {
        try {
            const user = await User.deleteOne({ username: req.params.username })

            if (!user) {
                return res.status(404).json({message: "No user with that ID"})
            };

            res.json(user)
        } catch (err) {
            res.status(500).json(err.message)
        }
    }
};