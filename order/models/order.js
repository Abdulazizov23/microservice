const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
    {
        bookId: {
            type: mongoose.SchemaTypes.ObjectId,
            required: true
        },
        productId: {
            type: mongoose.SchemaTypes.ObjectId,
            required: true
        },
        initialDate: {
            type: Date,
            required: true
        },
        deliveryDate: {
            type: Date,
            required: true
        }
    }
)

module.exports = mongoose.model("Order", orderSchema)