const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const holeLayoutSchema = new Schema({
    length: {type: Number, required: true},
    par: {type: Number, required: true}
});

const holeSchema = new Schema({
    number: {type: Number, required: true},
    holeLayouts: [holeLayoutSchema]
});

const layoutSchema = new Schema({
    holes: [holeSchema]
});

const courseSchema = new Schema({
    name: {type: String, required: true},
    location: {type: String, required: true},
    currentLayout: { type: layoutSchema, required: true },
    alternateLayouts: {type: [layoutSchema]},
    createdOn: { type: Date, required: true},
    createdBy: {type: String, required: true},
    updatedOn: {type: Date, required: true},
    updatedBy: {type: String, required: true}
}, { timestamps: true });

const Exercise = mongoose.model('Course', courseSchema);

module.exports = Exercise;