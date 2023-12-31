import mongoose from 'mongoose'

const ProductSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxlength: 60
        },
        desc: {
            type: String,
            required: true,
            maxlength: 200
        },
        img: {
            type: String,
            required: true,
        },
        prices: {
            type: [Number],
            required: true
        },
        extraOptions: {
            type: [{
                text: { type: String, required: true },
                price: { type: Number, required: true }
            }]
        }
    },
    { timestamps: true }
);

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);
module.exports = Product