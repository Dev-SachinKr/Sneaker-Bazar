const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    brand: {
      type: String,
      required: [true, 'Brand is required'],
    },
    size: [{
       type: Number, 
       required: true 
      }],
    category: {
      type: String,
      required: true,
      enum: ['Men', 'Women', 'Unisex'],
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
