import mongoose from "mongoose";
import Customer from "./Customer.js";
import Staff from "./Staff.js";
const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            trim: true,
            index: {
                unique: true,
                partialFilterExpression: { email: { $type: "String" } }
            }
        },
        phone: {
            type: String,
            trim: true,
            index: {
                unique: true,
                partialFilterExpression: { phone: { $type: "String" } }
            }
        },
        isActive: {
            type: Boolean,
            required: true,
            default: false,
        },
        delete: {
            type: Boolean,
            default: false,
        }
    },
    { timestamps: true }
)

export default mongoose.model("users", UserSchema);
