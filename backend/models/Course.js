const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const locationSchema = new Schema({
    latitude: {type: Schema.Types.Decimal128, required: true},
    longitude: {type: Schema.Types.Decimal128, required: true},
    address: {type: String, required: true}
},{ _id : false })

const holeLayoutSchema = new Schema({
    length: {type: Number, required: true},
    par: {type: Number, required: true}
}, { _id : false });

const holeSchema = new Schema({
    number: {type: Number, required: true},
    holeLayouts: [holeLayoutSchema]
}, { _id : false });

const layoutSchema = new Schema({
    holes: [holeSchema]
}, { _id : false });

const courseSchema = new Schema({
    name: {type: String, required: true},
    location: {type: locationSchema, required: true},
    description: {type: String, required: true},
    currentLayout: { type: layoutSchema, required: true },
    alternateLayouts: {type: [layoutSchema]},
    createdOn: { type: Date, required: true},
    createdBy: {type: String, required: true},
    updatedOn: {type: Date, required: true},
    updatedBy: {type: String, required: true}
}, { timestamps: true });

const Exercise = mongoose.model('Course', courseSchema);

module.exports = Exercise;