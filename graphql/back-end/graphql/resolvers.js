const bcrypt = require('bcryptjs');

const User = require('../models/user');

module.exports = {
    // createUser(args, req) {
    //     const email = args.userInput.email;
    // }
    createUser: async function({ userInput }, req) {
        const existingUser = await User.findOne({email: userInput.email});

        if (existingUser) {
            const error = new Error('User exists already!');
            throw error;
        }

        const hashedPw = await bcrypt.hash(userInput.password, 12);

        const user = new User({
            name: userInput.name,
            email: userInput.email,
            password: hashedPw
        });

        const createdUser = await user.save();

        return { ...createdUser._doc, _id: createdUser._id.toString() };
    }
};
