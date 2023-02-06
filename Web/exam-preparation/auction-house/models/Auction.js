const {
  Schema,
  model,
  Types: { ObjectId },
} = require('mongoose');

const auctionSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: [4, 'Title should be atleast 4 characters long'],
  },
  description: {
    type: String,
    required: true,
    maxLength: [200, 'Description should not exceed 200 characters'],
  },
  category: {
    type: String,
    required: true,
    enum: ['Vehicles', 'Real Estate', 'Electronics', 'Furniture', 'Other'],
  },
  price: {
    type: Number,
    min: [0, 'Price cannot be negative number'],
  },
  image: {
    type: String,
    required: true,
  },
  author: { type: ObjectId, required: true, ref: 'User' },
  bidder: [{ tyle: ObjectId, ref: 'User' }],
});

module.exports = model('Auction', auctionSchema);
