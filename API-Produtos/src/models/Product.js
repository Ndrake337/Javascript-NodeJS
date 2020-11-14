const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true,
    },
    imgLink: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    createdTime: {
        type: Date,
        default: Date.now,
    }
});

ProductSchema.plugin(mongoosePaginate)

mongoose.model('Product',ProductSchema);