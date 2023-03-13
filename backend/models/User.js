const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const holeSchema = new Schema({
    number: {type: Number, required: true},
    score: {type: Number, required: true}
});

const roundSchema = new Schema({
    courseId: {type: Schema.Types.ObjectId, required: true},
    holes: [holeSchema],
    roundStarted: {type: Date, required: true},
    roundFinished: {type: Date, required: true},
    createdOn: {type: Date, required: true},
    updatedOn: {type: Date},
});

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    currentRound: {type: roundSchema},
    roundHistory: [roundSchema],
    createdOn: {type: Date},
    updatedOn: {type: Date}
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;