import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true, // whenever we create a product at that time it should be createdAt and updatedAt fields
});

const Product = mongoose.model('Product',productSchema); // this line says to mongoose create a product collection and check that the product Schema 
// also we write here only Product but mongoose will create as Products and also if we write in small case it will handel that too  
export default Product;