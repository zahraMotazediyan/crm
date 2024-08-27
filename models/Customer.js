import {models, model, Schema} from "mongoose";

const customerSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 1
    },
    lastName: {
        type: String,
        required: true,
        minlength: 1
    },
    email: {
        type: String,
        required: true,
        minlength: 1
    },
    phone: String,
    address: String,
    postalCode: Number,
    date: Date,
    products: {
        type: Array,
        default: [],
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immediate: true,
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    }
});

const Customer = models && (models.Customer || model("Customer", customerSchema));

export default Customer;