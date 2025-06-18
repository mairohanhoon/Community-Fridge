import jwt from "jsonwebtoken";
import DonationModel from "../Models/donation.model.js";
import PickupModel from "../Models/pickup.model.js";

const schedulePickup = async (req, res) => {
  try {
    const token = req.cookies.token;
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const ngoId = decodedToken._id;
    const { donationId} = req.body;
    if (!donationId) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }
    const donation = await DonationModel.findById(donationId);
    if (!donation) {
      return res
        .status(404)
        .json({ message: "Donation not found", success: false });
    }
    if (donation?.isPickedUp == true) {
      return res.status(400).json({
        message: "Donation already scheduled for pickup",
        success: false,
      });
    }
    const scheduledDate = Date.now()
    const pickup = await PickupModel.create({
      donation: donationId,
      ngo: ngoId,
      scheduledDate,
    });
    donation.isPickedUp = true;
    await donation.save();
    res.status(201).json({
      message: "Pickup scheduled successfully",
      pickup,
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

const getNgoPickups = async (req, res) => {
  try {
    const token = req.cookies.token;
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const ngoId = decodedToken._id;
    const myPickups = await PickupModel.find({ ngo: ngoId });
    return res.status(200).json({
      message: "Successfully fetched all of my pickups",
      myPickups,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};

const getAllDonations = async (req, res) => {
  try {
    const allDonations = await DonationModel.find({ isPickedUp: false });
    return res.status(200).json({
      message: "Successfully fetched all the donations",
      allDonations,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};

export { schedulePickup, getNgoPickups, getAllDonations };
