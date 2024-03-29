const expect = require('chai').expect;
const mongoose = require('mongoose');

const User = require('../models/user');
const FeedController = require('../controllers/feed');

describe('Feed Controller', function () {
    before(function (done) {
        mongoose
            .connect('mongodb+srv://vladsto101:Salamur12@course.rgce3bw.mongodb.net/test-messages?retryWrites=true&w=majority')
            .then(() => {
                const user = new User({
                    _id: '5c0f66b979af55031b34728a',
                    email: 'test@test.com',
                    password: 'tester',
                    name: 'Test',
                    posts: []
                });

                return user.save();
            })
            .then(() => {
                done();
            })
    });

    it('should add a created post to the posts of the creator', function (done) {
        const req = {
            body: {
                title: 'Test Post',
                content: 'A Test Post'
            },
            file: {
                path: 'abc'
            },
            userId: '5c0f66b979af55031b34728a'
        };

        const res = {
            status: function () {
                return this;
            },
            json: function () { }
        };

        FeedController
            .createPost(req, res, () => { })
            .then((savedUser) => {
                expect(savedUser).to.have.property('posts');
                expect(savedUser.posts).to.have.length(1);
                done();
            });
    });

    after(function (done) {
        User.deleteMany({})
            .then(() => {
                return mongoose.disconnect();
            })
            .then(() => {
                done();
            });
    });
});
