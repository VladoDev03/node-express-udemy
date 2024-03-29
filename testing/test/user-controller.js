const expect = require('chai').expect;
const mongoose = require('mongoose');

const User = require('../models/user');
const UserController = require('../controllers/user');

describe('User Controller - Status', function () {
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

    beforeEach(function() {});

    it('should send a response with a valid user status for an existing user', function (done) {
        const req = { userId: '5c0f66b979af55031b34728a' };

        const res = {
            statusCode: 500,
            userStatus: null,
            status: function (code) {
                this.statusCode = code;
                return this;
            },
            json: function (data) {
                this.userStatus = data.status;
            }
        };

        UserController
            .getUserStatus(req, res, () => { })
            .then(() => {
                expect(res.statusCode).to.be.equal(200);
                expect(res.userStatus).to.be.equal('I am new!');
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

    afterEach(function() {});
});
