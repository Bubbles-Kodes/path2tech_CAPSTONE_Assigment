import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {type:String,required:true},
    description: {type:String,required:true},
    price: {type:Number,required:true},
    img: {type:String,required:true},
    category: {type:String,required:true}
})

foodSchema.virtual("id").get(function () {
    return this._id.toHexString();
});

foodSchema.set("toJSON", {
    virtuals: true // Include virtual fields in JSON responses
});

const foodModel = mongoose.models.food || mongoose.model("food",foodSchema);

export default foodModel;