import mongoose from 'mongoose';
// server/models/Brand.js


const BrandSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, trim: true },
}, { timestamps: true });

export default mongoose.model('Brand', BrandSchema);
