import mongoose, { mongo, Schema } from "mongoose";

const DonationSchema = new mongoose.Schema(
  {
    donor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    foodName: {
      type: String,
      required: true,
    },
    quantity: {
      type: String, // eg. 5kg, 10pack etc..
      required: true,
    },
    expiryDate: {
      type: Date,
      required: true,
    },
    location: {
      address: String,
      lat: String,
      lng: String,
      required: true,
    },
  },
  { timestamps: true }
);

const DonationModel = mongoose.model("Donation", DonationSchema);

export default DonationModel;
