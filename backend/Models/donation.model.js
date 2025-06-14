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
      type: String,
      required: true,
    },
    location: {
      type: Object,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    latitude: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
    isPickedUp: {
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true }
);

const DonationModel = mongoose.model("Donation", DonationSchema);

export default DonationModel;
